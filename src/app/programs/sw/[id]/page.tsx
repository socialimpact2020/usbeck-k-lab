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
export default function ProgramDetail() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div>
      <CurrentSection text="SW Education" />
      <CurrentDepth depth={["Programs", "SW Education", "Detail"]} />
      <div className="bg-gray-200">
        <div className="max-w-7xl m-auto pt-24 pb-5 relative ">
          <div className="flex justify-between mb-16">
            <div className="relative">
              <div className="mb-12">
                <span className="text-sm text-gray-500 font-bold">ACTIVE</span>
                <p className="text-2xl font-bold">Coming soon..</p>
              </div>

              <div>
                <p>
                  모집 기간 &nbsp; | &nbsp;{" "}
                  <span className="font-bold">2023-12-09 ~ 2023-12-20</span>
                </p>
                <p>
                  진행 기간 &nbsp; | &nbsp;{" "}
                  <span className="font-bold">2023-12-21 ~ 2023-12-22</span>
                </p>
              </div>

              <Link href="#" target="_blank">
                <button className="absolute bottom-0 left-0 text-white bg-black text-md px-20 py-3 rounded-md">
                  SIGN UP
                </button>
              </Link>
            </div>

            <div className="shadow-2xl">
              <Image
                src={dummyImage}
                alt="dummy_image"
                className="aspect-square w-64"
              />
            </div>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="flex relative">
          <Image src={mainDummy} alt="main_dummy" className="max-w-3xl" />
        </div>
      </SectionWrapper>
    </div>
  );
}
