"use client";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import Tabs from "@/components/UI/Programs/Tabs";
import IconInput from "@/components/UI/IconInput";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import DateSearchForm from "@/components/UI/Forms/DateSearchForm";
import Card from "@/components/UI/Programs/Card";
import Link from "next/link";
import Loading from "@/components/UI/Loading";
import useCourse from "@/hooks/useCourse";
import useSWRInfinite, { infinite } from "swr/infinite";
import { Course, ProgressPeriod, RecruitmentPeriod } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

interface CourseDetail extends Course {
  recruitmentPeriod: RecruitmentPeriod;
  progressPeriod: ProgressPeriod;
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
export default function SWEducation() {
  const [selectedTab, setSelectedTab] = useState("");
  const infiniteOptions = {
    revalidateFirstPage: true,
  };

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

  const router = useRouter();

  const getKey = (pageIndex: number, previousPageData: IResponseCourses) => {
    if (previousPageData && !previousPageData.ok) return null;
    const page = pageIndex + 1;
    const query = `?page=${page}&search=${search}&tab=${selectedTab}&startDate=${startDate}&endDate=${endDate}`;
    return `/api/edu/sw${query}`;
  };

  const { data, isLoading, error, size, setSize } =
    useSWRInfinite<IResponseCourses>(getKey, null, infiniteOptions);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.courses.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.courses.length < 8);

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

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
        <Loading />;
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      <CurrentSection
        text="IT ACADEMY"
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp"
        styles="bg-blend-darken  bg-black bg-opacity-50"
      />
      <CurrentDepth depth={["Programs", "IT ACADEMY"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">
            K_LAB PROGRAMS GUIDE
          </h4>
          <h2 className="font-bold text-2xl">Programs - IT ACADEMY</h2>
        </div>

        <Tabs
          tabs={[
            { tabLabel: "View All", tabValue: "" },
            { tabLabel: "Basic", tabValue: "Basic" },
            { tabLabel: "Developer", tabValue: "Developer" },
            { tabLabel: "Expert", tabValue: "Expert" },
          ]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        <DateSearchForm
          onSubmit={onSearchSubmit}
          search={search}
          startDate={startDate}
          endDate={endDate}
        />

        <div className="grid grid-cols-4 flex-wrap  max-w-7xl m-auto gap-10">
          {data &&
            data.map((v, _) =>
              v.courses.map((course, i) => (
                <Link key={course.id} href={`/programs/sw/${course.id}`}>
                  <Card {...course} />
                </Link>
              ))
            )}

          {!data && <p>No Programs</p>}
        </div>
      </SectionWrapper>

      <div ref={sentinelRef}></div>
    </div>
  );
}
