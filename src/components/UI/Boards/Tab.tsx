"use client";
import { urls } from "@/config/site";
import Link from "next/link";
import { useState } from "react";

export default function Tab({ selectedTab }: { selectedTab: string }) {
  return (
    <div>
      <div className="flex justify-center space-x-5 mb-8">
        <Link
          href={urls.notice}
          className={`tab-btn px-4 py-2  ${
            selectedTab === "notice"
              ? "btn-active bg-black text-white  rounded-full"
              : ""
          }`}
        >
          Notice
        </Link>
        <Link
          href={urls.news}
          className={`tab-btn px-4 py-2 ${
            selectedTab === "news"
              ? "btn-active bg-black text-white  rounded-full"
              : ""
          }`}
        >
          News
        </Link>
      </div>
    </div>
  );
}
