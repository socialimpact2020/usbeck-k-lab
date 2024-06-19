import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const courses = await client.course.findMany({
      orderBy: { createdAt: "desc" },
      take: 4,
      include: { progressPeriod: true, recruitmentPeriod: true },
    });
    const notices = await client.post.findMany({
      where: { type: "Notice" },
      orderBy: { createdAt: "desc" },
      select: {
        title: true,
        id: true,
        type: true,
        createdAt: true,
      },
      take: 5,
    });
    const news = await client.post.findMany({
      where: { type: "News" },
      orderBy: { createdAt: "desc" },
      select: {
        title: true,
        id: true,
        type: true,
        createdAt: true,
      },
      take: 5,
    });

    return NextResponse.json({ ok: true, courses, notices, news });
  } catch (err) {
    return NextResponse.json({ ok: false, message: err });
  }
}
