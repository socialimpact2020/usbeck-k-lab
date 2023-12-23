import { Info } from "@prisma/client";
import useSWR from "swr";

interface IResponseInfo {
  ok: boolean;
  info: Info;
}

export default function useInfo() {
  const { data, isLoading } = useSWR<IResponseInfo>("/api/info");

  return { info: data?.info, isLoading };
}
