import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";

import SectionWrapper from "@/components/UI/SectionWrapper";

import AboutLeftImage from "@/images/about_img1.png";
import AboutRightImage from "@/images/about_img2.png";

import Image from "next/image";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `About US | Uzbekistan K_LAB MAKER SPACE`,
  description:
    "By supporting K_LAB applying Korea's advanced technologies and systems, Uzbekistan will strengthen its national technical manpower capabilities and create economic opportunities in the ICT sector",
  openGraph: {
    title: "Uzbekistan K_LAB MAKER SPACE",
    url: "https://www.nipak-labuzb.co.kr/aboutus",
    type: "website",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/next/about_img3.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function AboutUs() {
  return (
    <div>
      <CurrentSection text="About Us" />
      <CurrentDepth depth={["Center", "About Us"]} />

      <SectionWrapper>
        <div className="grid grid-cols-2">
          <p className="text-2xl">
            By supporting K_LAB applying Korea's advanced technologies and
            systems, Uzbekistan will strengthen its national technical manpower
            capabilities and create economic opportunities in the ICT sector
          </p>

          <div>
            <Image
              src={AboutLeftImage}
              alt="about-image-1"
              className="absolute w-[250px] h-[250px] top-3 right-24 z-[1]"
            />
            <Image
              src={AboutRightImage}
              alt="about-image-2"
              className="absolute w-[300px] h-[300px] bottom-0 right-0"
            />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div
          className={
            "bg-[url('https://d2p8484c990lgc.cloudfront.net/KLAB/next/about_img3.png')] h-[250px] flex flex-col items-end justify-center bg-cover pr-10"
          }
        >
          <p className="font-bold text-2xl text-white">
            Creating an ecosystem for manufacturing prototypes
          </p>

          <p className="font-bold text-2xl text-white">
            by linking SW-Lab and Prototype production-Lab
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
