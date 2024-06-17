"use client";
import React, { useRef } from "react";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import Header from "@/components/UI/Header/Header";
import Footer from "@/components/UI/Footer/Footer";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Swal from "sweetalert2";
import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth";

type Inputs = {
  id: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({ id, password }) => {
    const result = await signIn("credentials", {
      id,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    if (result?.ok) {
      await Swal.fire({
        title: "SUCCESS",
        text: "Login Success",
        icon: "success",
      });
      router.push("/");
    } else {
      await Swal.fire({
        title: "Failed",
        text: `${result?.error}`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center py-20 min-h-dvh items-center flex-col bg-slate-50">
        <h1 className="text-3xl font-bold mb-10">Sign-in</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5"
        >
          <input
            type="text"
            placeholder="id here."
            className="w-96 h-14 text-xl text-center rounded-lg shadow-md input input-bordered"
            {...register("id", { required: "id field is required." })}
            autoFocus={true}
          />

          <input
            type="password"
            placeholder="password here."
            className="w-96 h-14 text-xl text-center rounded-lg shadow-md input input-bordered"
            {...register("password", {
              required: "password field is required.",
            })}
          />

          <button className="w-96 h-14 bg-black text-white rounded-lg">
            Sign-in
          </button>
        </form>
      </div>
    </>
  );
}
