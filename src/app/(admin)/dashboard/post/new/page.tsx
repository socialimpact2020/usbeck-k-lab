"use client";
import logo from "@/images/logo.png";
import Image from "next/image";
import Swal from "sweetalert2";
import { useForm, SubmitHandler } from "react-hook-form";
import PostEditor from "@/components/UI/Admin/Post/PostEditor";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Inputs = {
  type: string;
  title: string;
  content: string;
};

export default function CreatePost() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const router = useRouter();
  useEffect(() => {
    register("content", { required: true });
  }, [register]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.ok) {
      await Swal.fire({
        title: "SUCCESS",
        text: "Created successfully",
        icon: "success",
      });

      router.back();
    } else {
      await Swal.fire({
        title: "ERROR",
        text: "some errors occured",
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
      <h1 className="text-3xl text-zinc-600 font-bold mb-20">Create Post</h1>

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

        <PostEditor onEditorStateChange={onEditorStateChange} />

        <div>
          <button className="mt-14 w-full btn btn-primary text-lg">Post</button>
        </div>
      </form>
    </div>
  );
}
