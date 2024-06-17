"use client";

import EducationDetail from "@/components/Education/EducationDetail";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";

export default function ProgramDetail() {
  return (
    <div>
      <CurrentSection text="SW Education" />
      <CurrentDepth depth={["Programs", "SW Education", "Detail"]} />
      <EducationDetail />
    </div>
  );
}
