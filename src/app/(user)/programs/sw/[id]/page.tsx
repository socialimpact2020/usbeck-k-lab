"use client";

import EducationDetail from "@/components/Education/EducationDetail";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";

export default function ProgramDetail() {
  return (
    <div>
      <CurrentSection text="IT ACADEMY" />
      <CurrentDepth depth={["Programs", "IT ACADEMY", "Detail"]} />
      <EducationDetail />
    </div>
  );
}
