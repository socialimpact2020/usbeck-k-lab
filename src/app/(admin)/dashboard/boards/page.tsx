"use client";

import DashboardPostList from "@/components/admin/dashboard/boards/DashboardPostList";
import Image from "next/image";
import { useState } from "react";
import logo from "@/images/logo.png";
export default function DashboardCombinedList() {
  const [selectedTab, setSelectedTab] = useState("notice");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-20">
        <Image
          src={logo}
          alt="header logo"
          className="w-36 object-cover mb-5"
        />
        <h1 className="text-3xl text-zinc-600 font-bold mb-10">Boards</h1>
      </div>

      <div className="flex justify-center space-x-5 mb-8">
        <button
          className={`tab-btn px-4 py-2${
            selectedTab === "notice"
              ? "btn-active bg-black text-white  rounded-full"
              : ""
          }`}
          onClick={() => handleTabChange("notice")}
        >
          Notice
        </button>
        <button
          className={`tab-btn px-4 py-2 ${
            selectedTab === "news"
              ? "btn-active bg-black text-white  rounded-full"
              : ""
          }`}
          onClick={() => handleTabChange("news")}
        >
          News
        </button>
      </div>

      {selectedTab === "notice" && <DashboardPostList postType="notice" />}
      {selectedTab === "news" && <DashboardPostList postType="news" />}
    </div>
  );
}
