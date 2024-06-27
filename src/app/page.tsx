import Image from "next/image";
import Link from "next/link";
import dummy1 from "@/images/dummy1.jpg";
import dummy2 from "@/images/dummy2.jpg";
import dummyImg from "@/images/img_loading.jpg";
import { urls } from "@/config/site";
import Header from "@/components/UI/Header/Header";
import Footer from "@/components/UI/Footer/Footer";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import Loading from "@/components/UI/Loading";

import { Metadata } from "next";
import Home from "@/components/client/Home";

export const metadata: Metadata = {
  title: `Home | Uzbekistan K_LAB MAKER SPACE`,
  description:
    "By supporting K_LAB applying Korea's advanced technologies and systems, Uzbekistan will strengthen its national technical manpower capabilities and create economic opportunities in the ICT sector",
  openGraph: {
    title: "Uzbekistan K_LAB MAKER SPACE",
    url: "https://www.nipak-labuzb.co.kr",
    type: "website",
    images: "https://d2p8484c990lgc.cloudfront.net/KLAB/next/logo.png",
  },
};

export default function Main() {
  return (
    <>
      <Header />
      <div className="mb-10">
        <div className="bg-white relative">
          <div className="relative w-full max-w-7xl m-auto">
            <video
              muted
              autoPlay
              loop
              className="h-[720px] w-full bg-white  w-full z-20"
            >
              <source src="https://d2p8484c990lgc.cloudfront.net/KLAB/next/background-video.mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
            <h2 className="text-6xl text-white font-bold shadow-sm mb-5">
              Uzbekistan K-LAB
            </h2>

            <div className="w-[600px] h-[2px] border border-[#585858] mb-5" />

            <div className="mb-10">
              <p className="text-white">
                K-LAB Uzbekistan is a digital innovation space where Uzbek youth
                explore new possibilities
              </p>
              <p className="text-white">
                through the latest IT technologies and creative digital
                manufacturing solutions,
              </p>

              <p className="text-white">
                leading the transformation of the digital silk road era.
              </p>
            </div>
            <button className="text-white bg-gradient-to-r from-cyan-900  to-cyan-600 py-2 px-10 rounded-md shadow-lg text-lg">
              <Link href={urls.aboutus}>Enter </Link>
            </button>
          </div>
        </div>

        <Home />
      </div>
      <Footer />
    </>
  );
}
