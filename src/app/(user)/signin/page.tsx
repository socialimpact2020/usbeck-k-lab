"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type SignInInputs = {
  id: string;
  password: string;
};

const useSignInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();

  const onSubmit: SubmitHandler<SignInInputs> = async ({ id, password }) => {
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

  return { register, handleSubmit, errors, onSubmit };
};

const InputField: React.FC<{
  type: string;
  placeholder: string;
  register: UseFormRegister<SignInInputs>;
  name: keyof SignInInputs;
  required: string;
  autoFocus?: boolean;
}> = ({ type, placeholder, register, name, required, autoFocus }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-96 h-14 text-xl text-center rounded-lg shadow-md input input-bordered"
    {...register(name, { required })}
    autoFocus={autoFocus}
  />
);

export default function SignIn() {
  const { register, handleSubmit, errors, onSubmit } = useSignInForm();

  return (
    <div className="flex justify-center py-20 min-h-dvh items-center flex-col bg-slate-50">
      <h1 className="text-3xl font-bold mb-10">Sign-in</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5"
      >
        <InputField
          type="text"
          placeholder="id here."
          register={register}
          name="id"
          required="id field is required."
          autoFocus={true}
        />

        <InputField
          type="password"
          placeholder="password here."
          register={register}
          name="password"
          required="password field is required."
        />

        <button className="w-96 h-14 bg-black text-white rounded-lg">
          Sign-in
        </button>
      </form>
    </div>
  );
}
