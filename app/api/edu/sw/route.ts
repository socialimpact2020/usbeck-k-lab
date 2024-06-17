import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || "1";
  const searchQuery = searchParams.get("search") || "";
  const tab = searchParams.get("tab") || "";
  const startDateParam = searchParams.get("startDate");
  const endDateParam = searchParams.get("endDate");

  const LIMIT = 8;

  let whereClause: any = { category: "SW" };

  if (searchQuery) {
    whereClause = {
      ...whereClause,
      OR: [
        { title: { contains: searchQuery } },
        { content: { contains: searchQuery } },
      ],
    };
  }

  if (tab !== "") {
    whereClause = {
      ...whereClause,
      subcategory: tab,
    };
  }

  if (startDateParam && endDateParam) {
    const startDate = new Date(startDateParam);
    const endDate = new Date(endDateParam);
    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      whereClause = {
        ...whereClause,
        recruitmentPeriod: {
          endDate: { gte: startDate },
          startDate: { lte: endDate },
        },
      };
    }
  }

  const count = await client.course.count({
    where: whereClause,
  });

  const skipPage = parseInt(page) - 1;
  const courses = await client.course.findMany({
    where: whereClause,
    orderBy: {
      createdAt: "desc",
      // recruitmentPeriod: {
      //   endDate: "asc",
      // },
    },
    include: { progressPeriod: true, recruitmentPeriod: true },
    skip: skipPage * LIMIT,
    take: LIMIT,
  });

  if (courses.length < 1) {
    return NextResponse.json({
      ok: false,
      page,
      courses: [],
      totalCount: 0,
      totalPage: 0,
      searchQuery,
    });
  }

  return NextResponse.json({
    ok: true,
    searchQuery,
    page,
    courses,
    totalCount: count,
    totalPage: Math.ceil(count / LIMIT),
  });
}
