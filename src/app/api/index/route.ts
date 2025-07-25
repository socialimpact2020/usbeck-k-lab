import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [swCourses, hwCourses, boards, ot, banners, boardBanners] =
      await Promise.all([
        client.course.findMany({
          where: {
            category: "SW",
          },
          orderBy: { createdAt: "desc" },
          take: 2,
          include: { progressPeriod: true, recruitmentPeriod: true },
        }),

        client.course.findMany({
          where: {
            category: "HW",
          },
          orderBy: { createdAt: "desc" },
          take: 2,
          include: { progressPeriod: true, recruitmentPeriod: true },
        }),

        client.post.findMany({
          where: {
            type: {
              in: ["Notice", "News"],
            },
          },
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
          where: { type: "ot" },
          orderBy: { createdAt: "desc" },
          select: {
            title: true,
            id: true,
            type: true,
            createdAt: true,
          },
          take: 5,
        }),

        client.banner.findMany({
          orderBy: { id: "asc" },
          select: {
            id: true,
            bannerImageURL: true,
          },
          take: 5,
        }),

        client.boardBanner.findMany({
          orderBy: { id: "asc" },
          select: {
            id: true,
            bannerImageURL: true,
          },
          take: 5,
        }),
      ]);

    const response = NextResponse.json({
      ok: true,
      swCourses,
      hwCourses,
      boards,
      ot,
      banners,
      boardBanners,
    });
    response.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    return response;
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json({ ok: false, message: err });
  }
}
