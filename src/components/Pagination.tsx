import Link from "next/link";

export default function Pagination() {
  const selectedStyle = `bg-black text-white`;
  const nonSelectedStyle = `bg-white text-gray-500`;

  return (
    <div className="flex justify-center mt-5 items-center space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 h-3 text-gray-500 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>

      <div className="space-x-3">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Link href="#" key={i}>
            <span
              className={`${
                i === 0 && selectedStyle
              } inline-block w-5 text-center`}
            >
              {i + 1}
            </span>
          </Link>
        ))}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 h-3 text-gray-500 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}
