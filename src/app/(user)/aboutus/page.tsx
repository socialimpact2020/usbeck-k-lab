import { Metadata } from "next";
import Image from "next/image";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import AboutLeftImage from "@/images/about_img1.png";
import AboutRightImage from "@/images/about_img2.png";

// 메타데이터
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about K LAB Uzbekistan's mission and ecosystem connecting SW-Lab and Prototype production-Lab to power digital innovation.",
  alternates: { canonical: "/aboutus" },
  openGraph: {
    type: "website",
    url: "https://www.klabuz.com/aboutus",
    siteName: "K LAB Uzbekistan",
    title: "About Us",
    description:
      "Learn about K LAB Uzbekistan's mission and ecosystem connecting SW-Lab and Prototype production-Lab to power digital innovation.",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/next/about_img3.png",
        width: 1200,
        height: 630,
        alt: "About K LAB Uzbekistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Learn about K LAB Uzbekistan's mission and ecosystem connecting SW-Lab and Prototype production-Lab to power digital innovation.",
    images: [
      "https://d2p8484c990lgc.cloudfront.net/KLAB/next/about_img3.png",
    ],
  },
};

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
