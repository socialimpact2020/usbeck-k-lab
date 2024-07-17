"use client";
import { urls } from "@/config/site";
import useShorts from "@/hooks/useShorts";
import Link from "next/link";
import Loading from "../UI/Loading";
import Image from "next/image";
import { useEffect, useState } from "react";

// 날짜 포맷팅 함수
const formatDate = (date: string) => {
  const [year, month, day] = date.split("T")[0].split("-");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
// 날짜 범위 컴포넌트
const DateRange = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => (
  <span className="inline-flex justify-between text-xs whitespace-nowrap w-[180px]">
    <span>{formatDate(startDate)}</span>
    <span>~</span>
    <span>{formatDate(endDate)}</span>
  </span>
);
// 섹션 헤더 컴포넌트
const SectionHeader = ({
  title,
  moreLink,
}: {
  title: string;
  moreLink: string;
}) => (
  <div className="flex items-center justify-between border-b-gray-300 border-b-2 pb-1">
    <p className="text-lg font-semibold">{title}</p>
    <div className="flex items-center space-x-2">
      <Link href={moreLink} className="text-md text-gray-500">
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
);

// 프로그램 카드 컴포넌트
const ProgramCard = ({ course }: { course: any }) => (
  <Link
    key={course.id}
    target="_blank"
    href={`/programs/${course.category.toLowerCase()}/${course.id}`}
  >
    <div>
      <Image
        src={course.thumbnailURL}
        alt="course-thumbnail"
        width={302}
        height={302}
        className="aspect-square object-cover"
      />
      <h3 className="font-bold my-3">{course.title.slice(0, 25) + "..."}</h3>
      <h3 className="text-xs flex text-gray-400 whitespace-nowrap overflow-hidden">
        <span className="flex-shrink-0">모집 기간 | &nbsp;</span>
        <DateRange
          startDate={course.recruitmentPeriod.startDate}
          endDate={course.recruitmentPeriod.endDate}
        />
      </h3>
      <h3 className="text-xs flex text-gray-400 whitespace-nowrap overflow-hidden">
        <span className="flex-shrink-0">진행 기간 | &nbsp;</span>
        <DateRange
          startDate={course.progressPeriod.startDate}
          endDate={course.progressPeriod.endDate}
        />
      </h3>
    </div>
  </Link>
);

// 게시물 목록 컴포넌트
const PostList = ({
  posts,
  urlPrefix,
}: {
  posts: any[];
  urlPrefix: string;
}) => (
  <div className="overflow-x-auto">
    <table className="table">
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="font-bold">
              <Link href={`${urlPrefix}/${post.id}`}>
                {post.title.slice(0, 38) + "..."}
              </Link>
            </td>
            <td className="text-right text-gray-500">
              {formatDate(post.createdAt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BannerSlide = ({ banners }: { banners: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative w-full h-40 overflow-hidden">
      {banners.map((banner, index) => (
        <Image
          key={banner.id}
          src={banner.bannerImageURL}
          alt={`Banner ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`absolute transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const { data, isLoading } = useShorts();

  if (isLoading)
    return (
      <div className="flex justify-center h-96 items-center">
        <Loading />
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-2 max-w-7xl m-auto mt-10 gap-20">
        <div>
          <SectionHeader title="Programs" moreLink={urls.programs} />

          <div className="mt-5 flex mb-5 justify-start gap-8">
            {data &&
              data.courses?.map((course) => (
                <ProgramCard key={course.id} course={course} />
              ))}
          </div>
        </div>

        <div className="space-y-5">
          {data && data.banners && <BannerSlide banners={data.banners} />}
          <div>
            <SectionHeader title="Online Training" moreLink={urls.ot} />
            <PostList posts={data?.ot || []} urlPrefix={urls.ot} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 max-w-7xl m-auto mt-20 gap-20">
        <div>
          <SectionHeader title="Notice" moreLink={urls.notice} />
          <PostList posts={data?.notices || []} urlPrefix={urls.notice} />
        </div>
        <div>
          <SectionHeader title="News" moreLink={urls.news} />
          <PostList posts={data?.news || []} urlPrefix={urls.news} />
        </div>
      </div>
    </>
  );
}
