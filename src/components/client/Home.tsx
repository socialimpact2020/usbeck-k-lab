"use client";
import { urls } from "@/config/site";
import useShorts from "@/hooks/useShorts";
import Link from "next/link";
import Loading from "../UI/Loading";
import Image from "next/image";

export default function Home() {
  const { data, isLoading } = useShorts();

  if (isLoading)
    return (
      <div className="flex justify-center h-96 items-center">
        <Loading />
      </div>
    );
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-2 max-w-7xl m-auto  mt-10 gap-20">
        <div>
          <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
            <p className="text-lg font-semibold">Programs</p>

            <div className="flex items-center space-x-2">
              <Link href={urls.sw} className="text-md text-gray-500">
                More
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 mb-5 gap-5">
            {data &&
              data.courses?.map((course, _) => (
                <Link
                  key={course.id}
                  target="_blank"
                  href={`/programs/${course.category.toLowerCase()}/${
                    course.id
                  }`}
                >
                  <div>
                    <Image
                      src={course.thumbnailURL}
                      alt="course-thumbnail"
                      width={300}
                      height={300}
                      className="aspect-square object-cover"
                    />

                    <h3 className="font-bold my-3">
                      {course.title.slice(0, 25) + "..."}
                    </h3>

                    <h3 className="text-xs">
                      모집 기간 |{" "}
                      {
                        course.recruitmentPeriod.startDate
                          .toString()
                          .split("T")[0]
                      }{" "}
                      ~{" "}
                      {
                        course.recruitmentPeriod.endDate
                          .toString()
                          .split("T")[0]
                      }
                    </h3>
                    <h3 className="text-xs">
                      진행 기간 |{" "}
                      {course.progressPeriod.startDate.toString().split("T")[0]}{" "}
                      ~ {course.progressPeriod.endDate.toString().split("T")[0]}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
            <p className="text-lg font-semibold">Way to come</p>

            <div className="flex items-center space-x-2">
              <Link
                href="https://www.google.com/maps/place/25+Shakhrisabz+Street,+Tashkent,+%EC%9A%B0%EC%A6%88%EB%B2%A0%ED%82%A4%EC%8A%A4%ED%83%84/@41.3055591,69.2784915,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8ad671d84dcb:0x3175fb9f24cd3354!8m2!3d41.3055591!4d69.2810718!16s%2Fg%2F11h82385c7?entry=ttu"
                className="text-md text-gray-500"
                target="_blank"
              >
                More
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          <div className="mt-5 bg-black w-full h-[378px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1518968960327!2d69.27849151203073!3d41.30555907119057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad671d84dcb%3A0x3175fb9f24cd3354!2zMjUgU2hha2hyaXNhYnogU3RyZWV0LCBUYXNoa2VudCwg7Jqw7KaI67Kg7YKk7Iqk7YOE!5e0!3m2!1sko!2skr!4v1703168927173!5m2!1sko!2skr"
              width="100%"
              height="378"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 max-w-7xl m-auto  mt-20 gap-20">
        <div>
          <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
            <p className="text-lg font-semibold">Notice</p>

            <div className="flex items-center space-x-2">
              <Link href={urls.notice} className="text-md text-gray-500">
                More
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {data &&
                  data.notices?.map((notice, _) => (
                    <tr key={notice.id}>
                      <td className="font-bold">
                        <Link href={urls.notice + `/${notice.id}`}>
                          {notice.title.slice(0, 38) + "..."}
                        </Link>
                      </td>

                      <td className="text-right text-gray-500">
                        {notice.createdAt.toString().split("T")[0]}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
            <p className="text-lg font-semibold">News</p>

            <div className="flex items-center space-x-2">
              <Link href={urls.news} className="text-md text-gray-500">
                More
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {data &&
                  data.news?.map((news, _) => (
                    <tr key={news.id}>
                      <td className="font-bold">
                        <Link href={urls.news + `/${news.id}`}>
                          {news.title.slice(0, 38) + "..."}
                        </Link>
                      </td>

                      <td className="text-right text-gray-500">
                        {news.createdAt.toString().split("T")[0]}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
