import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";

import AboutLeftImage from "@/images/about_img1.png";
import AboutRightImage from "@/images/about_img2.png";

import Image from "next/image";

export default function Notice() {
  return (
    <div>
      <CurrentSection text="Notice" />
      <CurrentDepth depth={["Boards", "Notice"]} />

      <SectionWrapper>
        <></>
      </SectionWrapper>
    </div>
  );
}
