"use client";
import { useEffect, useState } from "react";
import EducationDetail from "@/components/Education/EducationDetail";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import { ProgramResponse, fetchProgramData } from "@/libs/server/api";
import Loading from "../UI/Loading";

interface ProgramDetailPageProps {
  id: string;
  programType: "hw" | "sw";
}

export default function EducationDetailPage({
  id,
  programType,
}: ProgramDetailPageProps) {
  const [programData, setProgramData] = useState<ProgramResponse | null>(null);

  useEffect(() => {
    fetchProgramData(id, programType).then(setProgramData).catch(console.error);
  }, [id, programType]);

  if (!programData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const depth = [
    "Programs",
    programType === "hw" ? "Digital Manufacturing" : "IT ACADEMY",
    programData.courseDetail.title,
  ];

  return (
    <div>
      <CurrentSection
        text={programType === "hw" ? "Digital Manufacturing" : "IT ACADEMY"}
        imageUrl={
          "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp"
        }
        styles="bg-blend-darken bg-black bg-opacity-50"
      />
      <CurrentDepth depth={depth} />
      <EducationDetail programData={programData} />
    </div>
  );
}
