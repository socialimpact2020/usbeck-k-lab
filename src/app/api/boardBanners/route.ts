import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/server/prisma";
import { getServerSession } from "next-auth";

export async function GET() {
  try {
    const banners = await prisma.boardBanner.findMany({
      select: { bannerImageURL: true, id: true },
      orderBy: { id: "asc" },
    });

    return NextResponse.json(banners);
  } catch (error) {
    return NextResponse.json({ error: "Banner GET Errors" });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 }
    );

  try {
    const { bannerImageURL } = await request.json();
    const bannerCount = await prisma.boardBanner.count();

    if (bannerCount >= 5) {
      return NextResponse.json({
        error: "Banner is limited to a maximum of five",
      });
    }

    const newBanner = await prisma.boardBanner.create({
      data: { bannerImageURL },
    });

    return NextResponse.json(newBanner);
  } catch (error) {
    return NextResponse.json({ error: "Banner POST Errors" });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 }
    );

  try {
    const { id, bannerImageURL } = await req.json();

    const updatedBanner = await prisma.boardBanner.update({
      where: { id },
      data: { bannerImageURL },
    });

    return NextResponse.json(updatedBanner);
  } catch (error) {
    return NextResponse.json({ error: "Banner PUT Errors" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 }
    );

  try {
    const { id } = await req.json();

    await prisma.boardBanner.delete({
      where: { id },
    });

    return NextResponse.json({ message: "배너가 성공적으로 삭제되었습니다." });
  } catch (error) {
    return NextResponse.json(
      { error: "Banner DELETE Errors" },
      { status: 500 }
    );
  }
}
