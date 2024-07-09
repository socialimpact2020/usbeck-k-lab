"use client";
import BoardContent from "@/components/Boards/BoardContent";
import usePaginationSearch from "@/hooks/usePaginationSearch";

export default function OnlineTrainingContent() {
  const paginationProps = usePaginationSearch("ot");

  const propsWithSearch = {
    ...paginationProps,
    state: {
      ...paginationProps.state,
      search: "",
      boardType: "ot" as const,
    },
  };
  return <BoardContent {...propsWithSearch} />;
}
