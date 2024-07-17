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

interface IBanners {
  id: number;
  bannerImageURL: string;
}
export interface IResponseMain {
  ok: boolean;
  courses: CourseDetail[];
  notices: IPostShorts[];
  news: IPostShorts[];
  ot: IPostShorts[];
  banners: IBanners[];
}

export default function useShorts() {
  const { data, isLoading } = useSWR<IResponseMain>("/api/index", {
    revalidateOnFocus: true, // 포커스 시 재검증
    revalidateOnReconnect: true, // 재연결 시 재검증
    refreshInterval: 30000, // 30초마다 데이터 갱신
    dedupingInterval: 5000, // 5초마다 중복 요청 허용
  });

  return {
    data,
    isLoading,
  };
}
