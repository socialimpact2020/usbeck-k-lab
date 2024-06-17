import { Course, ProgressPeriod, RecruitmentPeriod } from "@prisma/client";
import useSWR, { mutate } from "swr";

interface CourseDetail extends Course {
  recruitmentPeriod: RecruitmentPeriod;
  progressPeriod: ProgressPeriod;
}
interface IResponseCourseDetail {
  ok: boolean;
  courseDetail: CourseDetail;
}

export default function useCourseDetail(id: string) {
  const { data, isLoading } = useSWR<IResponseCourseDetail>(`/api/edu/${id}`);

  return {
    data: data?.courseDetail,
    isLoading,
    revalidate: () => mutate(`/api/edu/${id}`),
  };
}
