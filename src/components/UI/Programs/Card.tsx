import { CourseDetail } from "@/types/course";
import Image from "next/image";

export default function Card({
  title,
  thumbnailURL,
  recruitmentPeriod,
  progressPeriod,
}: CourseDetail) {
  const formatDate = (date: Date | string) => {
    const dateObject = date instanceof Date ? date : new Date(date);
    return dateObject.toISOString().slice(0, 10);
  };

  const isActive =
    new Date(recruitmentPeriod.startDate).getTime() <= new Date().getTime() &&
    new Date().getTime() <=
      new Date(
        new Date(recruitmentPeriod.endDate).setHours(23, 59, 59, 999)
      ).getTime();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-64">
        <Image src={thumbnailURL} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {isActive ? (
          <div className="absolute top-3 left-3 bg-cyan-700 text-white rounded-full px-2 py-2 text-xs">
            ACTIVE
          </div>
        ) : (
          <div className="absolute top-3 left-3 bg-slate-400 text-white rounded-full px-2 py-2 text-xs">
            DEACTIVE
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-4 overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h3>
        <div className="mt-auto space-y-1">
          <div className="flex text-xs text-gray-400">
            <span className="w-20 flex-shrink-0">모집기간:</span>
            <span className="flex-grow grid grid-cols-[1fr,auto,1fr] gap-1">
              <span>{formatDate(recruitmentPeriod.startDate)}</span>
              <span>~</span>
              <span className="text-right">
                {formatDate(recruitmentPeriod.endDate)}
              </span>
            </span>
          </div>
          <div className="flex text-xs text-gray-400">
            <span className="w-20 flex-shrink-0">교육기간:</span>
            <span className="flex-grow grid grid-cols-[1fr,auto,1fr] gap-1">
              <span>{formatDate(progressPeriod.startDate)}</span>
              <span>~</span>
              <span className="text-right">
                {formatDate(progressPeriod.endDate)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
