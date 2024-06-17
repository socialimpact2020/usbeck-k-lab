"use client";
import PostDetail from "@/components/Boards/PostDetail";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import Loading from "@/components/UI/Loading";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { suitFont } from "@/config/font";
import usePostDetail from "@/hooks/usePostDetail";
import DOMPurify from "dompurify";
import { useParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Post() {
  const { id } = useParams();
  const router = useRouter();
  const { data, isLoading } = usePostDetail(id + "");

  if (isLoading) {
    return (
      <div>
        <CurrentSection text="Notice" />
        <CurrentDepth depth={["Boards", "News", "Detail"]} />

        <SectionWrapper>
          <div className="text-center space-y-2 mb-10">
            <h4 className="text-gray-400 text-sm font-bold">
              K_LAB MAKER SPACE GUIDE
            </h4>
            <h2 className="font-bold text-2xl">News</h2>
          </div>
          <div className="w-full flex justify-center h-96">
            <Loading />
          </div>
        </SectionWrapper>
      </div>
    );
  }
  if (!isLoading && !data) {
    router.push("/404");
    return null;
  }

  return (
    <div>
      <CurrentSection text="Notice" />
      <CurrentDepth depth={["Boards", "Notice", "Detail"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">
            K_LAB MAKER SPACE GUIDE
          </h4>
          <h2 className="font-bold text-2xl">{data?.type}</h2>
        </div>

        {data && <PostDetail data={data} />}
      </SectionWrapper>
    </div>
  );
}
