import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3";

import client from "@/libs/server/prisma";
import { NextApiRequest, NextApiResponse } from "next";

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const s3Config: S3ClientConfig = {
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY as string,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    },
  };

  const fileName = `uzklab_${Date.now()}_${searchParams.get("file")}`;

  const date = new Date();
  date.setMinutes(date.getMinutes() + 1);

  const client = new S3Client(s3Config);
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `KLAB/${fileName}`,
  });

  const presignedUrl = await getSignedUrl(client, command, { expiresIn: 60 });

  return NextResponse.json({ ok: true, presignedUrl, fileName });
}
