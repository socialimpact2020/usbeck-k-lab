import { UseFormRegister } from "react-hook-form";

interface IconInputProps {
  text: string;
  register: UseFormRegister<any>;
  children: React.ReactNode;
}

export default function IconInput({
  text,
  register,
  children,
}: IconInputProps) {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder={text}
        className="w-full h-14 text-xl text-center rounded-lg shadow-md input input-bordered"
        {...register("search")}
      />
      {children}
    </div>
  );
}
