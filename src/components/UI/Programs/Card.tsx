import Image from "next/image";
import dummyImage from "@/images/dummy1.jpg";
import comingSoonImg from "@/images/img_loading.jpg";
import Link from "next/link";
import {
  Category,
  Course,
  ProgressPeriod,
  RecruitmentPeriod,
  Subcategory,
} from "@prisma/client";

interface ICardProps {
  id: number;
  category: Category;
  subcategory: Subcategory;
  thumbnailURL: string;
  title: string;
  linkURL: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  recruitmentPeriodId: number;
  progressPeriodId: number;
  recruitmentPeriod: RecruitmentPeriod;
  progressPeriod: ProgressPeriod;
}

export default function Card(course: ICardProps) {
  return (
    <div className="card w-72 bg-base-100 shadow-xl relative">
      <figure>
        <Image
          src={course.thumbnailURL}
          alt="course-thumbnail"
          width={300}
          height={300}
          className="object-cover w-full h-[256px]"
        />

        {new Date(course.recruitmentPeriod.startDate) <= new Date() &&
        new Date() <= new Date(course.recruitmentPeriod.endDate) ? (
          <div className="absolute top-3 left-3 bg-cyan-700 text-white rounded-full px-2 py-2 text-xs">
            ACTIVE
          </div>
        ) : (
          <div className="absolute top-3 left-3 bg-slate-400 text-white rounded-full px-2 py-2 text-xs">
            DEACTIVE
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[18px]">
          {course.title.slice(0, 20) + "..."}
        </h2>

        <p className="text-end text-gray-500">
          ~{course.recruitmentPeriod.endDate.toString().split("T")[0]}
        </p>
      </div>
    </div>
  );
}
