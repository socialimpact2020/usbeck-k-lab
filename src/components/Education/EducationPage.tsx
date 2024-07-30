"use client";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import Tabs from "@/components/UI/Programs/Tabs";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { useEffect, useRef, useState } from "react";
import DateSearchForm from "@/components/UI/Forms/DateSearchForm";
import Card from "@/components/UI/Programs/Card";
import Link from "next/link";
import Loading from "@/components/UI/Loading";
import useSWRInfinite from "swr/infinite";
import { Course, ProgressPeriod, RecruitmentPeriod } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

interface CourseDetail extends Course {
  recruitmentPeriod: RecruitmentPeriod;
  progressPeriod: ProgressPeriod;
  imageUrl?: string;
}

interface IResponseCourses {
  ok: boolean;
  courses: CourseDetail[];
  page: string;
  totalCount: number;
  totalPage: number;
}

interface SearchForm {
  search: string;
  startDate: Date | null;
  endDate: Date | null;
}

interface EducationPageProps {
  title: string;
  subtitle: string;
  tabs: { tabLabel: string; tabValue: string }[];
  apiPath: string;
  linkPrefix: string;
}

export default function EducationPage({
  title,
  subtitle,
  tabs,
  apiPath,
  linkPrefix,
}: EducationPageProps) {
  const [selectedTab, setSelectedTab] = useState("");
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [startDate, setStartDate] = useState<Date | null>(
    searchParams.get("startDate")
      ? new Date(searchParams.get("startDate")!)
      : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    searchParams.get("endDate") ? new Date(searchParams.get("endDate")!) : null
  );
  const router = useRouter();

  const onSearchSubmit = (data: SearchForm) => {
    setSearch(data.search);
    setStartDate(data.startDate);
    setEndDate(data.endDate);

    const formattedStartDate = data.startDate
      ? data.startDate.toISOString().split("T")[0]
      : "";
    const formattedEndDate = data.endDate
      ? data.endDate.toISOString().split("T")[0]
      : "";

    router.push(
      `?tab=${selectedTab}&search=${data.search}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`
    );
  };

  const getKey = (pageIndex: number, previousPageData: IResponseCourses) => {
    if (previousPageData && !previousPageData.ok) return null;
    const page = pageIndex + 1;
    const query = `?page=${page}&search=${search}&tab=${selectedTab}&startDate=${startDate}&endDate=${endDate}`;
    return `${apiPath}${query}`;
  };

  const { data, isLoading, error, size, setSize } =
    useSWRInfinite<IResponseCourses>(getKey, null, {
      revalidateFirstPage: true,
    });

  const isLoadingInitialData = !data && !error;
  const isEmpty = data?.[0]?.courses.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.courses.length < 8);

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    router.push(`?tab=${selectedTab}`, { scroll: false });
    setSearch("");
    setStartDate(null);
    setEndDate(null);
  }, [selectedTab]);

  useEffect(() => {
    if (!isLoading && !isReachingEnd) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSize((prevSize) => prevSize + 1);
        }
      });
      if (sentinelRef.current) {
        observer.current.observe(sentinelRef.current);
      }
    }
    return () => {
      if (observer.current && sentinelRef.current) {
        observer.current.unobserve(sentinelRef.current);
      }
    };
  }, [isLoading, isReachingEnd, setSize]);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center h-dvh">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <CurrentSection
        text={title}
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp"
        styles="bg-blend-darken bg-black bg-opacity-50"
      />
      <CurrentDepth depth={["Programs", title]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">K-LAB PROGRAMS</h4>
          <h2 className="font-bold text-2xl">{subtitle}</h2>
        </div>

        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <DateSearchForm
          onSubmit={onSearchSubmit}
          search={search}
          startDate={startDate}
          endDate={endDate}
        />

        <div className="grid grid-cols-4 flex-wrap max-w-7xl m-auto gap-10">
          {data &&
            data.map((v) =>
              v.courses.map((course) => (
                <Link key={course.id} href={`${linkPrefix}/${course.id}`}>
                  <Card {...course} />
                </Link>
              ))
            )}

          {!data && <p>프로그램이 없습니다</p>}
        </div>
      </SectionWrapper>

      <div ref={sentinelRef}></div>
    </div>
  );
}
