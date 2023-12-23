"use client";
import useInfo from "@/hooks/useInfo";
import footerLeft from "@/images/footer_left_logo.jpg";
import footerRight from "@/images/footer_right_logo.png";
import Image from "next/image";

export default function Footer() {
  const { info } = useInfo();

  return (
    <footer className="bg-black py-10">
      <div className="max-w-7xl m-auto flex items-center justify-between">
        <Image src={footerLeft} alt="footer-left-image" className="w-40" />
        <div className="space-y-1">
          <p className="text-white">{info?.address}</p>

          <p className="text-white">Contact : {info?.tel}</p>

          <p className="text-white">E-mail: {info?.email}</p>
          <p className="text-white">
            Copyright © Uzbekistan K_LAB MAKER SPACE all rights reversed
          </p>
        </div>
        <Image src={footerRight} alt="footer-right-image" className="w-52" />
      </div>
    </footer>
  );
}
