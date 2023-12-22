import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import Tabs from "@/components/UI/Programs/Tabs";
import SearchInput from "@/components/UI/SearchInput";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { useState } from "react";

export default function SWEducation() {
  return (
    <div>
      <CurrentSection text="SW Education" />
      <CurrentDepth depth={["Programs", "SW Education"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">
            K_LAB MAKER SPACE GUIDE
          </h4>
          <h2 className="font-bold text-2xl">Programs - SW Education</h2>
        </div>

        <Tabs tabs={["Basic", "Developer", "Expert", "View All"]} />

        <div className="flex justify-center relative max-w-5xl m-auto mb-20">
          <SearchInput />
        </div>
      </SectionWrapper>
    </div>
  );
}
