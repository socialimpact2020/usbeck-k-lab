import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import Tabs from "@/components/UI/Programs/Tabs";
import IconInput from "@/components/UI/IconInput";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { useState } from "react";
import DateSearchForm from "@/components/UI/Forms/DateSearchForm";
import Card from "@/components/UI/Programs/Card";
import Link from "next/link";

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

        <Tabs tabs={["View All", "Basic", "Developer", "Expert"]} />

        <DateSearchForm />

        <div className="grid grid-cols-4 flex-wrap  max-w-7xl m-auto gap-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
            <Link key={i} href={`/programs/sw/${i}`}>
              <Card key={item} />
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
