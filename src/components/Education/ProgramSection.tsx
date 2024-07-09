"use client";

import { urls } from "@/config/site";
import { Course, ProgressPeriod, RecruitmentPeriod } from "@prisma/client";
import Link from "next/link";
import useSWR from "swr";
import Card from "@/components/UI/Programs/Card";
import SectionWrapper from "@/components/UI/SectionWrapper";

interface CourseDetail extends Course {
  thumbnailURL: string;
  recruitmentPeriod: {
    id: number;
    startDate: Date;
    endDate: Date;
  };
  progressPeriod: {
    id: number;
    startDate: Date;
    endDate: Date;
  };
}

interface IResponseCourses {
  ok: boolean;
  sw: CourseDetail[];
  hw: CourseDetail[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ProgramSectionProps {
  title: string;
  subtitle: string;
  type: "sw" | "hw";
}

export default function ProgramSection({
  title,
  subtitle,
  type,
}: ProgramSectionProps) {
  const { data, error } = useSWR<IResponseCourses>("/api/edu", fetcher);

  if (error) return <div>데이터를 불러오는 데 실패했습니다.</div>;
  if (!data) return null;

  const courses = data[type];

  return (
    <SectionWrapper>
      <div className="text-center mb-10">
        <h4 className="text-gray-400 text-sm font-bold mb-2">{subtitle}</h4>
        <h2 className="font-bold text-2xl mb-10">{title}</h2>
        <div className="flex items-center justify-end space-x-2 border-gray-300 border-b pb-1">
          <Link href={urls[type]} className="text-md text-gray-500">
            More
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href={`/programs/${type}/${course.id}`}>
            <Card {...course} />
          </Link>
        ))}
      </div>

      {courses.length === 0 && (
        <p className="text-center text-gray-400 text-sm">No Programs..</p>
      )}
    </SectionWrapper>
  );
}
