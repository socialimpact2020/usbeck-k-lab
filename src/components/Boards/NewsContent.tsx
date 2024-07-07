"use client";
import BoardContent from "@/components/Boards/BoardContent";
import usePaginationSearch from "@/hooks/usePaginationSearch";

export default function NewsContent() {
  const paginationProps = usePaginationSearch("news");

  const propsWithSearch = {
    ...paginationProps,
    state: {
      ...paginationProps.state,
      search: "",
      boardType: "news" as const,
    },
  };
  return <BoardContent {...propsWithSearch} />;
}
