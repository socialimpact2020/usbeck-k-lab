"use client";
import Loading from "@/components/UI/Loading";
import useInfo from "@/hooks/useInfo";
import logo from "@/images/logo.png";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

type Inputs = {
  address: string;
  tel: string;
  email: string;
};

export default function Dashboard() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { info, isLoading } = useInfo();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await (
      await fetch("/api/info", {
        method: "POST",
        body: JSON.stringify(data),
      })
    ).json();

    if (response.ok) {
      await Swal.fire({
        title: "SUCCESS",
        text: "UPDATE SUCCESS",
        icon: "success",
      });
    } else {
      await Swal.fire({
        title: "ERROR",
        text: "UPDATE FAILED",
        icon: "error",
      });
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="py-20 flex items-center w-full flex-col justify-center">
      <Image src={logo} alt="header logo" className="w-36 object-cover mb-5" />
      <h1 className="text-3xl text-zinc-600 font-bold">PROFILE UPDATE</h1>

      <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="input input-bordered w-[600px]"
            placeholder="address here."
            {...register("address", { value: info?.address })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="tel">Tel</label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="tel here."
            {...register("tel", { value: info?.tel })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="input input-bordered"
            placeholder="email here."
            {...register("email", { value: info?.email })}
          />
        </div>

        <button className="w-[600px] rounded-lg bg-[#204162] h-12 text-white">
          UPDATE
        </button>
      </form>
    </div>
  );
}
