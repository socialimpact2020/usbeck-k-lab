"use client";
import BoardContent from "@/components/Boards/BoardContent";
import usePaginationSearch from "@/hooks/usePaginationSearch";

export default function NoticeContent() {
  const paginationProps = usePaginationSearch("notice");

  const propsWithSearch = {
    ...paginationProps,
    state: {
      ...paginationProps.state,
      search: "",
      boardType: "notice" as const,
    },
  };
  return <BoardContent {...propsWithSearch} />;
}
