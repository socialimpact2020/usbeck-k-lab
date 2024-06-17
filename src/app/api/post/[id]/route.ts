import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import client from "@/libs/server/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 }
    );

  try {
    const data = await req.json();
    await client.post.update({ data, where: { id: Number(params.id) } });
  } catch (err) {
    NextResponse.json({ ok: false, message: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 }
    );

  try {
    await client.post.delete({
      where: {
        id: Number(params.id),
      },
    });
  } catch (err) {
    NextResponse.json({ ok: false, message: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
