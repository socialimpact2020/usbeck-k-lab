import { Post } from "@prisma/client";
import useSWR, { mutate } from "swr";

interface IResponsePostDetail {
  ok: boolean;
  postDetail: Post;
}

export default function usePostDetail(id: string) {
  const { data, isLoading } = useSWR<IResponsePostDetail>(
    `/api/post/detail/${id}`
  );

  return {
    data: data?.postDetail,
    isLoading,
    revalidate: () => mutate(`/api/post/${id}`),
  };
}
