import { Suspense } from "react";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import Loading from "@/components/UI/Loading";
import SectionWrapper from "@/components/UI/SectionWrapper";
import ProgramSection from "@/components/Education/ProgramSection";

export default function Programs() {
  return (
    <div>
      <CurrentSection
        text="IT ACADEMY"
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp"
        styles="bg-blend-darken bg-black bg-opacity-50"
      />
      <CurrentDepth depth={["Programs"]} />

      <Suspense fallback={<Loading />}>
        <ProgramSection
          title="IT ACADEMY"
          subtitle="K-LAB PROGRAMS"
          type="sw"
        />
      </Suspense>

      <SectionWrapper className="pt-5">
        <Suspense fallback={<Loading />}>
          <ProgramSection
            title="Digital Manufacturing"
            subtitle="K-LAB PROGRAMS"
            type="hw"
          />
        </Suspense>
      </SectionWrapper>
    </div>
  );
}
