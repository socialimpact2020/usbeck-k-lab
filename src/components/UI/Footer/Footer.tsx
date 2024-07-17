"use client";
import useInfo from "@/hooks/useInfo";
import footerLeft from "@/images/footer_company1.png";
import footerRight from "@/images/footer_company2.png";
import Image from "next/image";

export default function Footer() {
  const { info } = useInfo();

  return (
    <footer className="bg-[#D9D9D9] py-3">
      <div className="max-w-7xl m-auto flex items-center justify-between">
        <div className="py-5">
          <p className="font-bold text-lg">
            <span className="border-b-2 border-black pb-1">M</span>anagement
            Team
          </p>
          <div className="flex items-center space-x-6 mt-6">
            <Image src={footerLeft} alt="footer-left-image" className="w-36" />
            <Image
              src={footerRight}
              alt="footer-right-image"
              className="w-36"
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-black font-bold text-sm">{info?.address}</p>

          <p className="text-black font-bold text-sm">Contact : {info?.tel}</p>

          <p className="text-black font-bold text-sm">E-mail: {info?.email}</p>
          <p className="text-black font-bold text-sm">
            Copyright © Uzbekistan K_LAB DIGITAL MANUFACTURING all rights
            reversed
          </p>
        </div>
      </div>
    </footer>
  );
}
