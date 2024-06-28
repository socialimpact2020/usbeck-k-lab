"use client";
import Pagination from "@/components/Pagination";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import IconInput from "@/components/UI/IconInput";
import Loading from "@/components/UI/Loading";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { urls } from "@/config/site";
import usePaginationSearch from "@/hooks/usePaginationSearch";
import usePosts from "@/hooks/usePosts";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";

export default function Notice() {
  const {
    state,
    data,
    isLoading,
    handleSubmit,
    register,
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
    handleSearch,
  } = usePaginationSearch("notice");

  if (isLoading) {
    return (
      <div>
        <CurrentSection text="Notice" />
        <CurrentDepth depth={["Boards", "Notice"]} />
        <div className="flex justify-center items-center h-dvh">
          <Loading />;
        </div>
      </div>
    );
  }

  return (
    <div>
      <CurrentSection
        text="Notice"
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp"
        styles="bg-cover"
      />
      <CurrentDepth depth={["Boards", "Notice"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">K-LAB GUIDE</h4>
          <h2 className="font-bold text-2xl">Notice</h2>
        </div>

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
              {data &&
                data?.posts.map((post, i) => (
                  <tr key={post.id}>
                    <td className="text-center w-1/12">
                      <span className="bg-black px-3 py-1 rounded-full text-white">
                        {post.type}
                      </span>
                    </td>

                    <td className="text-lg font-bold">
                      <Link href={urls.notice + `/${post.id}`}>
                        {post.title}
                      </Link>
                    </td>
                    <td className="text-center">
                      {post.createdAt.toString().split("T")[0]}
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
            totalPage={Number(data.totalPage)}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            onPageChange={handlePageClick}
          />
        )}
      </SectionWrapper>
    </div>
  );
}
