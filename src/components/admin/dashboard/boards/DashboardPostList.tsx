import React, { useEffect, useReducer } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import logo from "@/images/logo.png";
import Loading from "@/components/UI/Loading";
import { urls } from "@/config/site";
import usePosts from "@/hooks/usePosts";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { mutate } from "swr";
import { useForm } from "react-hook-form";
import usePaginationSearch from "@/hooks/usePaginationSearch";

interface DashboardPostListProps {
  postType: "notice" | "news" | "ot";
}

const DashboardPostList: React.FC<DashboardPostListProps> = ({ postType }) => {
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
  } = usePaginationSearch(postType);
  const searchParams = useSearchParams();

  const handleDeleteItem = async (id: number) => {
    await Swal.fire({
      title: "Are you sure?",
      text: "Click Yes to delete it.",
      icon: "warning",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await (
          await fetch(`/api/post/${id}`, {
            method: "DELETE",
          })
        ).json();

        if (response.ok) {
          mutate(
            `/api/posts?page=${state.currentPage}&type=${postType}&search=${
              searchParams.get("search") || ""
            }`
          );
          await Swal.fire({
            title: "DELETED",
            text: "Your Post has been deleted.",
            icon: "success",
          });
        } else {
          await Swal.fire({
            title: "ERROR",
            text: "some error occured",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="flex items-center w-full flex-col">
      <div className="overflow-x-auto w-[80%]">
        <form
          className="flex justify-center mb-10"
          onSubmit={handleSubmit(handleSearch)}
        >
          <input
            type="text"
            placeholder="Search here."
            className="text-center input  input-bordered w-[60%]"
            {...register("search")}
          />
        </form>
        <div className="flex justify-end">
          <Link href={`${urls.dashboardPost}/new`} className="">
            <button className="bg-emerald-600 text-white font-bold text-xs rounded-lg px-3 py-2 mb-2">
              CREATE
            </button>
          </Link>
        </div>
        <table className="table text-center mb-14">
          <thead className="bg-slate-300">
            <tr>
              <th>ID</th>
              <th>TYPE</th>
              <th>TITLE</th>
              <th>CREATEDAT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data?.posts?.map((post) => (
              <tr key={post.id}>
                <th>{post.id}</th>
                <td>
                  <span className="bg-black text-white px-2 py-1 rounded-full">
                    {post.type}
                  </span>
                </td>
                <td>
                  <Link
                    href={`${urls[postType]}/${post.id}`}
                    target="_blank"
                    className="cursor-pointer hover:underline"
                  >
                    {post.title}
                  </Link>
                </td>
                <td>{post.createdAt.toString().split("T")[0]}</td>
                <td className="flex justify-center space-x-2">
                  <Link href={`${urls.dashboardPost}/${post.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleDeleteItem(post.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!isLoading && data && (
          <Pagination
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            currentPage={state.currentPage}
            totalPage={Number(data.totalPage)}
            onPageChange={handlePageClick}
          />
        )}
      </div>

      {!data?.totalCount && (
        <h1 className="font-bold text-md">No Posts Yet.</h1>
      )}
    </div>
  );
};

export default DashboardPostList;
