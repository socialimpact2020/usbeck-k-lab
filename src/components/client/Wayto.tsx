"use client";

import useInfo from "@/hooks/useInfo";

export default function Wayto() {
  const { info } = useInfo();
  return (
    <div>
      <div className="space-x-8">
        <span className="font-bold text-lg">Business Hours</span>
        <span className="">9 AM to 18:00 (Mon~Fri)</span>
      </div>

      <div className="space-x-8">
        <span className="font-bold text-lg">Customer Service Center</span>
        <span className="">{info?.tel}</span>
      </div>
      <div className="space-x-8">
        <span className="font-bold text-lg">E-mail</span>
        <span className="">{info?.email}</span>
      </div>
      <div className="space-x-8">
        <span className="font-bold text-lg">Address</span>
        <span className="">{info?.address}</span>
      </div>
    </div>
  );
}
