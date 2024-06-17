import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({
      ok: false,
      message: "Your Request is invalid.",
    });
  }

  const postDetail = await client.post.findUnique({ where: { id: id } });

  if (!postDetail) {
    return NextResponse.json({ ok: false, message: "No Post" });
  }

  await client.post.update({
    where: { id: id },
    data: { views: postDetail.views + 1 },
  });

  return NextResponse.json({ ok: true, postDetail });
}
