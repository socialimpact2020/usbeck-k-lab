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

const usePaginationSearch = (boardType: "notice" | "news") => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [state, dispatch] = useReducer(reducer, {
    currentPage: initialPage,
  });

  const { data, isLoading } = usePosts(
    boardType,
    searchParams.get("search") || ""
  );

  const { handleSubmit, register, setValue } = useForm<ISearchForm>();

  useEffect(() => {
    const scrollPosition = window.scrollY;

    if (data) {
      router.push(
        `?page=${state.currentPage}&search=${searchParams.get("search") || ""}`,
        { scroll: false }
      );
    }

    window.scrollTo(0, scrollPosition);
  }, [state.currentPage, data]);

  useEffect(() => {
    setValue("search", searchParams.get("search") || "");
  }, []);

  const handlePreviousPage = () => {
    if (data) {
      dispatch({ type: "PREVIOUS_PAGE", totalPage: data?.totalPage });
    }
  };

  const handleNextPage = () => {
    if (data) {
      dispatch({ type: "NEXT_PAGE", totalPage: data?.totalPage });
    }
  };

  const handlePageClick = (page: number) => {
    dispatch({ type: "MOVE_PAGE", page, totalPage: data?.totalPage });
  };

  const handleSearch = ({ search }: ISearchForm) => {
    dispatch({ type: "MOVE_PAGE", page: 1 });

    router.push(`?page=1&search=${search}`);
    setTimeout(() => {
      router.push(`?page=1&search=${search}`);
    }, 0);
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
