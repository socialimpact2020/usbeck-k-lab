import { Metadata } from "next";
import Image from "next/image";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import AboutLeftImage from "@/images/about_img1.png";
import AboutRightImage from "@/images/about_img2.png";

// 메타데이터 상수
const META_DATA: Metadata = {
  title: `About US | Uzbekistan K_LAB`,
  description:
    "By supporting K_LAB applying Korea's advanced technologies and systems, Uzbekistan will strengthen its national technical manpower capabilities and create economic opportunities in the ICT sector",
  openGraph: {
    title: "Uzbekistan K_LAB",
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

export const metadata = META_DATA;

// 소개 텍스트 컴포넌트
const IntroText: React.FC = () => (
  <p className="text-2xl">
    By supporting K_LAB applying Korea's advanced technologies and systems,
    Uzbekistan will strengthen its national technical manpower capabilities and
    create economic opportunities in the ICT sector
  </p>
);

// 이미지 섹션 컴포넌트
const ImageSection: React.FC = () => (
  <div className="relative h-[300px]">
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
);

// 배경 이미지 섹션 컴포넌트
const BackgroundImageSection: React.FC = () => (
  <div className="bg-[url('https://d2p8484c990lgc.cloudfront.net/KLAB/next/about_img3.png')] h-[250px] bg-cover flex flex-col items-end justify-center pr-10">
    <p className="font-bold text-2xl text-white">
      Creating an ecosystem for manufacturing prototypes
    </p>
    <p className="font-bold text-2xl text-white">
      by linking SW-Lab and Prototype production-Lab
    </p>
  </div>
);

export default function AboutUs() {
  return (
    <div>
      <CurrentSection
        text="About Us"
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_about_banner..webp"
        styles="bg-cover"
      />
      <CurrentDepth depth={["Center", "About Us"]} />

      <SectionWrapper>
        <div className="grid grid-cols-2">
          <IntroText />
          <ImageSection />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <BackgroundImageSection />
      </SectionWrapper>
    </div>
  );
}
