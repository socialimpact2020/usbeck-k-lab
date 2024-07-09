"use client";
import logo from "@/images/logo.png";
import Image from "next/image";
import Swal from "sweetalert2";
import { useForm, SubmitHandler } from "react-hook-form";
import PostEditor from "@/components/UI/Admin/Post/PostEditor";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import usePostDetail from "@/hooks/usePostDetail";
import Loading from "@/components/UI/Loading";
import { mutate } from "swr";

type Inputs = {
  type: string;
  title: string;
  content: string;
};

export default function EditPost({ params }: { params: { id: string } }) {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const router = useRouter();

  const { data, isLoading, revalidate } = usePostDetail(params.id);
  useEffect(() => {
    revalidate();
  }, []);
  useEffect(() => {
    if (data) {
      setValue("type", data.type);
      setValue("title", data.title);
      setValue("content", data.content);
    }
  }, [data]);

  if (isLoading) return <Loading />;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch(`/api/post/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.ok) {
      await Swal.fire({
        title: "SUCCESS",
        text: "Updated successfully",
        icon: "success",
      });

      router.back();
    } else {
      await Swal.fire({
        title: "ERROR",
        text: "Some errors occurred",
        icon: "error",
      });
    }
  };

  const onEditorStateChange = (editorState: string) => {
    setValue("content", editorState);
  };

  return (
    <div className="flex items-center w-full flex-col justify-center">
      <Image src={logo} alt="header logo" className="w-36 object-cover mb-5" />
      <h1 className="text-3xl text-zinc-600 font-bold mb-20">Edit Post</h1>

      <form
        className="space-y-3 flex flex-col w-[70%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <select
          className="select select-bordered w-full max-w-xs"
          {...register("type", { required: true })}
          defaultValue=""
        >
          <option value="" disabled>
            Select Post Type
          </option>
          <option value="Notice">Notice</option>
          <option value="News">News</option>
          <option value="ot">Online Training</option>
        </select>

        <input
          type="text"
          placeholder="post title here."
          className="input input-bordered"
          {...register("title", { required: true })}
        />

        {data && (
          <PostEditor
            onEditorStateChange={onEditorStateChange}
            content={data.content}
          />
        )}

        <div>
          <button className="mt-14 w-full btn btn-primary text-lg">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
