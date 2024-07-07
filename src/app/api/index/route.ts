import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    console.log("Fetching data...");

    const [courses, notices, news] = await Promise.all([
      client.course.findMany({
        orderBy: { createdAt: "desc" },
        take: 4,
        include: { progressPeriod: true, recruitmentPeriod: true },
      }),
      client.post.findMany({
        where: { type: "Notice" },
        orderBy: { createdAt: "desc" },
        select: {
          title: true,
          id: true,
          type: true,
          createdAt: true,
        },
        take: 5,
      }),
      client.post.findMany({
        where: { type: "News" },
        orderBy: { createdAt: "desc" },
        select: {
          title: true,
          id: true,
          type: true,
          createdAt: true,
        },
        take: 5,
      }),
    ]);

    console.log("Courses fetched:", courses);
    console.log("Notices fetched:", notices);
    console.log("News fetched:", news);

    const response = NextResponse.json({ ok: true, courses, notices, news });
    response.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    return response;
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json({ ok: false, message: err });
  }
}
