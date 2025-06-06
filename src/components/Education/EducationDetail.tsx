"use client";

import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { suitFont } from "@/config/font";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

import mainDummy from "@/images/dummy3.jpg";

import Link from "next/link";
import useCourseDetail from "@/hooks/useCourseDetail";
import Loading from "@/components/UI/Loading";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { ProgramResponse } from "@/libs/server/api";

interface EducationDetailProps {
  programData: ProgramResponse;
}

export default function EducationDetail({ programData }: EducationDetailProps) {
  const { id } = useParams();

  const { data, isLoading } = useCourseDetail(id + "");
  const router = useRouter();
  const [contentHTML, setContentHTML] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      DOMPurify.addHook("afterSanitizeAttributes", function (node) {
        if (node.tagName === "IFRAME") {
          const src = node.getAttribute("src");
          if (src && src.startsWith("https://www.youtube.com/embed/")) {
            node.setAttribute("frameborder", "0");
            node.setAttribute("allowfullscreen", "true");
          } else {
            node.remove(); // YouTube 이외의 iframe 제거
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      const sanitizedContent = DOMPurify.sanitize(data.content, {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: [
          "allow",
          "allowfullscreen",
          "frameborder",
          "src",
          "alt",
          "title",
        ],
        ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?:)?\/\/)|(?:data:image\/)/i,
      });
      setContentHTML(sanitizedContent);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div>
        <div className="flex justify-center h-dvh">
          <Loading />
        </div>
      </div>
    );
  }

  if (!data) {
    router.push("/404");
    return null;
  }

  return (
    <>
      <div className="bg-gray-200">
        <div className="max-w-7xl m-auto pt-24 pb-5 relative ">
          <div className="flex justify-between mb-16">
            <div className="relative">
              <div className="mb-12">
                <span className="text-sm text-gray-500 font-bold">
                  {new Date(data.recruitmentPeriod.startDate) <= new Date() &&
                  new Date() <= new Date(data.recruitmentPeriod.endDate)
                    ? "ACTIVE"
                    : "DEACTIVE"}
                </span>
                <p className="text-2xl font-bold">{data.title}</p>
              </div>

              <div>
                <p>
                  Application Period &nbsp; | &nbsp;{" "}
                  <span className="font-bold">
                    {data.recruitmentPeriod.startDate.toString().split("T")[0]}{" "}
                    ~ {data.recruitmentPeriod.endDate.toString().split("T")[0]}
                  </span>
                </p>
                <p>
                  Training Period &nbsp; | &nbsp;{" "}
                  <span className="font-bold">
                    {data.progressPeriod.startDate.toString().split("T")[0]} ~{" "}
                    {data.progressPeriod.endDate.toString().split("T")[0]}
                  </span>
                </p>
              </div>

              <Link href={data.linkURL} target="_blank">
                <button className="absolute bottom-0 left-0 text-white bg-black text-md px-20 py-3 rounded-md">
                  SIGN UP
                </button>
              </Link>
            </div>

            <div className="shadow-2xl">
              <Image
                src={data.thumbnailURL}
                alt="dummy_image"
                width={256}
                height={256}
                className="aspect-square  object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div
          className="sanitized-parent break-all"
          dangerouslySetInnerHTML={{ __html: contentHTML }}
        ></div>
      </SectionWrapper>
    </>
  );
}
