"use client";
import SectionWrapper from "@/components/UI/SectionWrapper";
import useInfo from "@/hooks/useInfo";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  address: string;
  tel: string;
  email: string;
};

export default function DemoInfo() {
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
      alert("ㅇㅇ");
    }
  };

  if (isLoading) return;

  return (
    <SectionWrapper>
      <h1 className="text-lg mb-3 font-bold">Update Info Demo</h1>
      <form className="space-x-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="input input-bordered"
          placeholder="address"
          {...register("address", { value: info?.address })}
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="tel"
          {...register("tel", { value: info?.tel })}
        />
        <input
          type="email"
          className="input input-bordered"
          placeholder="email"
          {...register("email", { value: info?.email })}
        />
        <button className="btn btn-primary">수정</button>
      </form>
    </SectionWrapper>
  );
}
