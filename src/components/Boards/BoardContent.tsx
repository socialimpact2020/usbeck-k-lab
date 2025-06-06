"use client";
import Pagination from "@/components/Pagination";
import IconInput from "@/components/UI/IconInput";
import Loading from "@/components/UI/Loading";
import { UrlKeys, urls } from "@/config/site";
import Link from "next/link";
import { IResponsePosts, ISearchForm, State } from "@/types/boards";
import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";

interface BoardContentProps {
  state: State & {
    boardType: UrlKeys;
  };
  data: IResponsePosts | undefined;
  isLoading: boolean;
  handleSubmit: UseFormHandleSubmit<ISearchForm>;
  register: UseFormRegister<ISearchForm>;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  handleSearch: ({ search }: ISearchForm) => void;
}
export default function BoardContent({
  state,
  data,
  isLoading,
  handleSubmit,
  register,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  handleSearch,
}: BoardContentProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-dvh">
        <Loading />
      </div>
    );
  }

  const formattedPosts = data?.posts.map((post) => ({
    id: post.id.toString(),
    type: post.type,
    title: post.title,
    createdAt: post.createdAt
      ? post.createdAt instanceof Date
        ? post.createdAt.toISOString()
        : typeof post.createdAt === "string"
        ? post.createdAt
        : new Date(post.createdAt).toISOString()
      : "",
  }));
  return (
    <>
      <form
        className="flex justify-center relative max-w-7xl m-auto mb-20"
        onSubmit={handleSubmit(handleSearch)}
      >
        <IconInput text="Please enter your search term" register={register}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute transform top-1/2 -translate-y-1/2 right-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </IconInput>
      </form>

      <div className="overflow-x-auto mb-16">
        <table className="table">
          <thead>
            <tr className="text-black">
              <th className="text-center w-1/12">TYPE</th>
              <th className="w-1/2">TITLE</th>
              <th className="text-center w-1/12">CREATED</th>
            </tr>
          </thead>
          <tbody>
            {formattedPosts?.map((post) => (
              <tr key={post.id}>
                <td className="text-center w-1/12">
                  <span className="bg-black px-3 py-1 rounded-full text-white">
                    {post.type}
                  </span>
                </td>
                <td className="text-lg font-bold">
                  <Link href={`${urls[state.boardType]}/${post.id}`}>
                    {post.title}
                  </Link>
                </td>
                <td className="text-center">
                  {post.createdAt ? post.createdAt.split("T")[0] : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!data && <p>No posts.</p>}
      </div>

      {!isLoading && data && (
        <Pagination
          currentPage={state.currentPage}
          totalPage={data.totalPage}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          onPageChange={handlePageClick}
        />
      )}
    </>
  );
}
