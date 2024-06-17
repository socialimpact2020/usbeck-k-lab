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

    await client.course.update({
      where: { id: Number(params.id) },
      data: {
        category: data.category,
        subcategory: data.subcategory,
        thumbnailURL: data.thumbnailURL,
        linkURL: data.linkURL,
        title: data.title,
        content: data.content,
        recruitmentPeriodId: data.recruitmentPeriodId,
        progressPeriodId: data.progressPeriodId,
      },
    });

    if (data.recruitmentPeriod) {
      console.log(new Date(data.recruitmentPeriod.startDate));
      await client.recruitmentPeriod.update({
        where: { id: data.recruitmentPeriodId },
        data: {
          startDate: new Date(data.recruitmentPeriod.startDate),
          endDate: new Date(data.recruitmentPeriod.endDate),
        },
      });
    }

    if (data.progressPeriod) {
      await client.progressPeriod.update({
        where: { id: data.progressPeriodId },
        data: {
          startDate: new Date(data.progressPeriod.startDate),
          endDate: new Date(data.progressPeriod.endDate),
        },
      });
    }
  } catch (err) {
    NextResponse.json({ ok: false, message: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ ok: false, message: "No Course" });
  }

  const courseDetail = await client.course.findUnique({
    where: { id: id },
    include: {
      recruitmentPeriod: true,
      progressPeriod: true,
    },
  });

  if (!courseDetail) {
    return NextResponse.json({ ok: false, message: "No Course" });
  }

  return NextResponse.json({ ok: true, courseDetail });
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
    await client.course.delete({
      where: {
        id: Number(params.id),
      },
    });
  } catch (err) {
    NextResponse.json({ ok: false, message: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
