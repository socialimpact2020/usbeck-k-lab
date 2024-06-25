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
      <CurrentSection
        text="Digital Manufacturing"
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp"
        styles="bg-blend-darken  bg-black bg-opacity-50"
      />
      <CurrentDepth depth={["Programs", "Digital Manufacturing", "Detail"]} />
      <EducationDetail />
    </div>
  );
}
