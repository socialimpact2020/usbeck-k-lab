import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const data = await req.json();

  const session = await getServerSession();
  if (!session)
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 }
    );

  const newPost = await client.post.create({
    data: data,
  });
  return NextResponse.json({ newPost, ok: true });
}
