import { useEffect, useReducer } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import usePosts from "@/hooks/usePosts";

interface State {
  currentPage: number;
}

const reducer = (
  state: State,
  action: { type: string; totalPage?: number; page?: number }
): State => {
  let targetPage;
  switch (action.type) {
    case "PREVIOUS_PAGE":
      targetPage = state.currentPage - 10;
      if (targetPage < 1) targetPage = 1;
      return {
        ...state,
        currentPage: targetPage,
      };
    case "NEXT_PAGE":
      targetPage = state.currentPage + 10;
      if (targetPage > Number(action.totalPage))
        targetPage = Number(action.totalPage);
      return {
        ...state,
        currentPage: targetPage,
      };
    case "MOVE_PAGE":
      return {
        ...state,
        currentPage: action.page || 1,
      };
    default:
      return state;
  }
};

interface ISearchForm {
  search: string;
}

const usePaginationSearch = (boardType: "notice" | "news" | "ot") => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = Number(searchParams.get("page")) || 1;
  const searchValue = searchParams.get("search") || "";

  const [state, dispatch] = useReducer(reducer, {
    currentPage: initialPage,
  });

  const { data, isLoading } = usePosts(boardType, searchValue);
  const { handleSubmit, register, setValue } = useForm<ISearchForm>();

  useEffect(() => {
    setValue("search", searchValue);
  }, [searchParams]);

  useEffect(() => {
    const currentQueryPage = Number(searchParams.get("page")) || 1;
    const currentQuerySearch = searchParams.get("search") || "";

    if (
      currentQueryPage !== state.currentPage ||
      currentQuerySearch !== searchValue
    ) {
      const scrollPosition = window.scrollY;
      router.push(
        `?page=${state.currentPage}&search=${currentQuerySearch}`,
        { scroll: false }
      );
      window.scrollTo(0, scrollPosition);
    }
  }, [state.currentPage]);

  const handlePreviousPage = () => {
    if (data) {
      dispatch({ type: "PREVIOUS_PAGE", totalPage: data.totalPage });
    }
  };

  const handleNextPage = () => {
    if (data) {
      dispatch({ type: "NEXT_PAGE", totalPage: data.totalPage });
    }
  };

  const handlePageClick = (page: number) => {
    dispatch({ type: "MOVE_PAGE", page });
  };

  const handleSearch = ({ search }: ISearchForm) => {
    dispatch({ type: "MOVE_PAGE", page: 1 });
    router.push(`?page=1&search=${search}`);
  };

  return {
    state,
    data,
    isLoading,
    handleSubmit,
    register,
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
    handleSearch,
  };
};

export default usePaginationSearch;
