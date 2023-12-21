import Pagination from "@/components/Pagination";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";

import AboutLeftImage from "@/images/about_img1.png";
import AboutRightImage from "@/images/about_img2.png";

import Image from "next/image";
import Link from "next/link";

export default function Notice() {
  return (
    <div>
      <CurrentSection text="Notice" />
      <CurrentDepth depth={["Boards", "Notice"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">
            K_LAB MAKER SPACE GUIDE
          </h4>
          <h2 className="font-bold text-2xl">Notice</h2>
        </div>

        <div className="flex justify-center relative max-w-5xl m-auto mb-20">
          <label className="form-control w-full">
            <input
              type="text"
              placeholder="Please enter your search term"
              className="input input-bordered w-full !outline-gray-600"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute transform top-1/2 -translate-y-1/2 right-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </label>
        </div>

        <div className="overflow-x-auto mb-16">
          <table className="table">
            <thead>
              <tr className="text-black">
                <th className="text-center">Type</th>
                <th>Title</th>
                <th className="text-center">Created</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
                <tr key={i}>
                  <td className="text-center">
                    <span className="bg-black px-3 py-1 rounded-full text-white">
                      Notice
                    </span>
                  </td>
                  <td className="text-lg font-bold">
                    <Link href="#">Lorem Ipsum ~~~~</Link>
                  </td>
                  <td className="text-center">2023-12-21</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination />
      </SectionWrapper>
    </div>
  );
}
