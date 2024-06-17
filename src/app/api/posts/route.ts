import client from "@/libs/server/prisma";

import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const type = searchParams.get("type") || "notice";
  const searchQuery = searchParams.get("search") || "";

  const LIMIT = 10;

  const searchFilter = {
    OR: [
      { title: { contains: searchQuery } },
      { content: { contains: searchQuery } },
    ],
  };
  const count = await client.post.count({
    where: {
      AND: [{ type: type }, searchQuery ? searchFilter : {}],
    },
  });

  const skipPage = parseInt(page) - 1;
  const posts = await client.post.findMany({
    where: {
      AND: [{ type: type }, searchQuery ? searchFilter : {}],
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: skipPage * LIMIT,
    take: LIMIT,
  });

  if (posts.length < 1) {
    return NextResponse.json({
      ok: false,
      page,
      posts: [],
      totalCount: 0,
      totalPage: 0,
      searchQuery,
    });
  }

  return NextResponse.json({
    ok: true,
    searchQuery,
    page,
    posts,
    totalCount: count,
    totalPage: Math.ceil(count / LIMIT),
  });
}
