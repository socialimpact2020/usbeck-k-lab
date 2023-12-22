import Pagination from "@/components/Pagination";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SearchInput from "@/components/UI/SearchInput";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { urls } from "@/config/site";

import AboutLeftImage from "@/images/about_img1.png";
import AboutRightImage from "@/images/about_img2.png";

import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <div>
      <CurrentSection text="News" />
      <CurrentDepth depth={["Boards", "News"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">
            K_LAB MAKER SPACE GUIDE
          </h4>
          <h2 className="font-bold text-2xl">News</h2>
        </div>

        <div className="flex justify-center relative max-w-5xl m-auto mb-20">
          <SearchInput />
        </div>

        <div className="overflow-x-auto mb-16">
          <table className="table">
            <thead>
              <tr className="text-black">
                <th className="text-center">TYPE</th>
                <th>TITLE</th>
                <th className="text-center">CREATED</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
                <tr key={i}>
                  <td className="text-center">
                    <span className="bg-black px-3 py-1 rounded-full text-white">
                      News
                    </span>
                  </td>
                  <td className="text-lg font-bold">
                    <Link href={urls.news + `/${i + 1}`}>Lorem Ipsum ~~~~</Link>
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
