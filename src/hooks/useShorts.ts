import { Course, ProgressPeriod, RecruitmentPeriod } from "@prisma/client";
import useSWR from "swr";

interface CourseDetail extends Course {
  progressPeriod: ProgressPeriod;
  recruitmentPeriod: RecruitmentPeriod;
}

interface IPostShorts {
  id: number;
  title: string;
  type: string;
  createdAt: Date;
}
export interface IResponseMain {
  ok: boolean;
  courses: CourseDetail[];
  notices: IPostShorts[];
  news: IPostShorts[];
}

export default function useShorts() {
  const { data, isLoading } = useSWR<IResponseMain>("/api/index");

  return {
    data,
    isLoading,
  };
}
