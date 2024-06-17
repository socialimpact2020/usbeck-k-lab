import { UseFormRegister } from "react-hook-form";

interface IIconInput {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  register: UseFormRegister<any>;
}

export default function IconInput({
  text,
  className = "",
  children,
  register,
}: IIconInput) {
  return (
    <label className="form-control w-full">
      <input
        type="text"
        placeholder={text}
        className={`input input-bordered w-full !outline-gray-600 ${className}`}
        {...register("search")}
      />

      {children}
    </label>
  );
}
