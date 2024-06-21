"use client";

import DashboardPostList from "@/components/admin/dashboard/boards/DashboardPostList";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import logo from "@/images/logo.png";
import Link from "next/link";
import { urls } from "@/config/site";
import useCourse from "@/hooks/useCourse";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/UI/Loading";
import Pagination from "@/components/Pagination";
import { useForm } from "react-hook-form";
import DashboardEducationList from "@/components/admin/dashboard/educations/DashboardEducationList";

export default function EducationList() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-20">
        <Image
          src={logo}
          alt="header logo"
          className="w-36 object-cover mb-5"
        />
        <h1 className="text-3xl text-zinc-600 font-bold mb-10">
          Digital Manufacturing
        </h1>
      </div>
      <DashboardEducationList category="hw" />
    </div>
  );
}
