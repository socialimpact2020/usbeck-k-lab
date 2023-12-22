import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET() {
  const info = await client.info.findFirst();

  return NextResponse.json({ info });
}
