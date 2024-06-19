"use client";
import useInfo from "@/hooks/useInfo";
import footerLeft from "@/images/footer_left_logo.png";
import footerRight from "@/images/footer_right_logo.png";
import Image from "next/image";

export default function Footer() {
  const { info } = useInfo();

  return (
    <footer className="bg-[#D9D9D9] py-3">
      <div className="max-w-7xl m-auto flex items-center justify-between">
        <Image src={footerLeft} alt="footer-left-image" className="w-40" />
        <div className="space-y-1">
          <p className="text-black font-bold text-sm">{info?.address}</p>

          <p className="text-black font-bold text-sm">Contact : {info?.tel}</p>

          <p className="text-black font-bold text-sm">E-mail: {info?.email}</p>
          <p className="text-black font-bold text-sm">
            Copyright © Uzbekistan K_LAB DIGITAL MANUFACTURING all rights
            reversed
          </p>
        </div>
        <Image src={footerRight} alt="footer-right-image" className="w-52" />
      </div>
    </footer>
  );
}
