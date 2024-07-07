import { Course, ProgressPeriod, RecruitmentPeriod } from "@prisma/client";

export interface CourseDetail extends Course {
  thumbnailURL: string;
  recruitmentPeriod: {
    id: number;
    startDate: Date;
    endDate: Date;
  };
  progressPeriod: {
    id: number;
    startDate: Date;
    endDate: Date;
  };
}
export interface IResponseCourses {
  ok: boolean;
  sw: CourseDetail[];
  hw: CourseDetail[];
}
