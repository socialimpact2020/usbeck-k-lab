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
        <div className="bg-gray-950 relative">
          <video muted autoPlay loop className="opacity-[0.5] h-[720px] w-full">
            <source src="https://d2p8484c990lgc.cloudfront.net/KLAB/next/background-video.mp4" />
          </video>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-6xl text-white font-bold shadow-sm mb-10">
              Uzbekistan K_LAB
            </h2>

            <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-5 rounded-md shadow-lg">
              <Link href={urls.aboutus}>Enter MarketSpace</Link>
            </button>
          </div>
        </div>

        <Home />
      </div>
      <Footer />
    </>
  );
}
