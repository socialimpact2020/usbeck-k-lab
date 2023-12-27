import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const info = await client.info.findFirst();

  return NextResponse.json({ ok: true, info });
}

export async function POST(req: NextRequest, res: NextApiResponse) {
  const data = await req.json();

  const updated = await client.info.update({ data, where: { id: 1 } });
  return NextResponse.json({ ...updated, ok: true });
}
