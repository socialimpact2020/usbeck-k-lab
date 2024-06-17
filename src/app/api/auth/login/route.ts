import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const { id, password } = await req.json();

  const admin = await client.admin.findFirst();

  if (id !== admin?.id)
    return NextResponse.json({ ok: false, message: "invalid user id." });

  if (!(await bcrypt.compare(password, admin!.password)))
    return NextResponse.json({ ok: false, message: "invalid user password." });

  return NextResponse.json({ ...admin, password: "", ok: true });
}
