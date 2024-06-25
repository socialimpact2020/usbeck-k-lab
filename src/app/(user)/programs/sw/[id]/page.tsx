"use client";

import EducationDetail from "@/components/Education/EducationDetail";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";

export default function ProgramDetail() {
  return (
    <div>
      <CurrentSection
        text="IT ACADEMY"
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp"
        styles="bg-blend-darken  bg-black bg-opacity-50"
      />
      <CurrentDepth depth={["Programs", "IT ACADEMY", "Detail"]} />
      <EducationDetail />
    </div>
  );
}
