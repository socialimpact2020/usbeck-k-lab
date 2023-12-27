import Image from "next/image";
import dummyImage from "@/images/dummy1.jpg";
import comingSoonImg from "@/images/img_loading.jpg";
import Link from "next/link";

export default function Card() {
  return (
    <div className="card w-72 bg-base-100 shadow-xl relative">
      <figure>
        <Image src={comingSoonImg} alt="dummy" />
        <div className="absolute top-3 left-3 bg-violet-600 text-white rounded-full px-2 py-2 text-xs">
          ACTIVE
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Contrary to popular belief</h2>

        <p className="text-end text-gray-500">~2023-12-28</p>
      </div>
    </div>
  );
}
