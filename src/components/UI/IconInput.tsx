interface IIconInput {
  text?: string;
  children?: React.ReactNode;
}

export default function IconInput({ text, children }: IIconInput) {
  return (
    <label className="form-control w-full">
      <input
        type="text"
        placeholder={text}
        className="input input-bordered w-full !outline-gray-600"
      />

      {children}
    </label>
  );
}
