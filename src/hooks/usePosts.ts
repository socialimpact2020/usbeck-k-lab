import { Post } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

interface IResponsePosts {
  ok: boolean;
  posts: Post[];
  page: string;
  totalCount: number;
  totalPage: number;
}

export default function usePosts(
  type: "notice" | "news" | "ot",
  search: string | ""
) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data, isLoading } = useSWR<IResponsePosts>(
    `/api/posts?page=${page}&type=${type}&search=${search}`
  );

  return { data, isLoading };
}
