import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import client from "@/libs/server/prisma";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const courses = await client.course.findMany({
      where: {
        OR: [{ category: "SW" }, { category: "HW" }],
      },
      orderBy: { createdAt: "desc" },
      take: 16,
      include: { progressPeriod: true, recruitmentPeriod: true },
    });

    const swCourses = courses
      .filter((course) => course.category === "SW")
      .slice(0, 8);
    const hwCourses = courses
      .filter((course) => course.category === "HW")
      .slice(0, 8);

    return NextResponse.json({
      ok: true,
      sw: swCourses,
      hw: hwCourses,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false, message: err }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextApiResponse) {
  const data = await req.json();
  const session = await getServerSession();

  if (!session)
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 }
    );

  try {
    if (!data?.recruitmentPeriod || !data?.progressPeriod) {
      return NextResponse.json({ ok: false, message: "Date must be entered." });
    }

    const response = await client.course.create({
      data: {
        ...data,
        recruitmentPeriod: {
          create: {
            startDate: new Date(data.recruitmentPeriod.startDate),
            endDate: new Date(data.recruitmentPeriod.endDate),
          },
        },
        progressPeriod: {
          create: {
            startDate: new Date(data.progressPeriod.startDate),
            endDate: new Date(data.progressPeriod.endDate),
          },
        },
      },
    });
    return NextResponse.json({ ok: true, response });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false, message: err }, { status: 500 });
  }
}
