import { Course, Post } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

interface IResponseCourses {
  ok: boolean;
  courses: Course[];
  page: string;
  totalCount: number;
  totalPage: number;
}

export default function useCourse(category: "sw" | "hw", search: string | "") {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data, isLoading } = useSWR<IResponseCourses>(
    `/api/edu/${category}?page=${page}&search=${search}`
  );

  return { data, isLoading };
}
