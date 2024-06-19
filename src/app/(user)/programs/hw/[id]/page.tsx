"use client";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { suitFont } from "@/config/font";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

import dummyImage from "@/images/dummy2.jpg";
import mainDummy from "@/images/dummy3.jpg";

import Link from "next/link";
import EducationDetail from "@/components/Education/EducationDetail";
export default function ProgramDetail() {
  return (
    <div>
      <CurrentSection text="Digital Manufacturing Education" />
      <CurrentDepth
        depth={["Programs", "Digital Manufacturing Education", "Detail"]}
      />
      <EducationDetail />
    </div>
  );
}
