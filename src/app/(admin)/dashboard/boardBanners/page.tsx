"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import useSWR from "swr";
import logo from "@/images/logo.png";
import { Banner } from "@prisma/client";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useBannerManagement = () => {
  const { data: banners, mutate } = useSWR<Banner[]>(
    "/api/boardBanners",
    fetcher
  );

  const addBanner = async (file: File) => {
    if (banners && banners.length >= 5) {
      throw new Error("최대 5개의 배너만 추가할 수 있습니다.");
    }

    const presignedResponse = await fetch(`/api/presigned?file=${file.name}`, {
      method: "GET",
    });
    const { presignedUrl, fileName } = await presignedResponse.json();

    await fetch(presignedUrl, {
      method: "PUT",
      body: file,
      headers: { "Content-Type": file.type },
    });

    const bannerImageURL = `https://d2p8484c990lgc.cloudfront.net/KLAB/${fileName}`;

    await fetch("/api/boardBanners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bannerImageURL }),
    });

    mutate();
  };

  const updateBanner = async (id: number, file: File) => {
    const presignedResponse = await fetch(`/api/presigned?file=${file.name}`, {
      method: "GET",
    });
    const { presignedUrl, fileName } = await presignedResponse.json();

    await fetch(presignedUrl, {
      method: "PUT",
      body: file,
      headers: { "Content-Type": file.type },
    });

    const bannerImageURL = `https://d2p8484c990lgc.cloudfront.net/KLAB/${fileName}`;

    const response = await fetch("/api/boardBanners", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, bannerImageURL }),
    });

    if (!response.ok) {
      throw new Error("배너 수정에 실패했습니다.");
    }

    mutate();
  };

  const deleteBanner = async (id: number) => {
    const response = await fetch("/api/boardBanners", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error("배너 삭제에 실패했습니다.");
    }

    mutate();
  };

  return { banners, addBanner, updateBanner, deleteBanner };
};

export default function DashboardBannerList() {
  const [file, setFile] = useState<File | null>(null);
  const [editingBannerId, setEditingBannerId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { banners, addBanner, updateBanner, deleteBanner } =
    useBannerManagement();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const openFileUpload = () => fileInputRef.current?.click();

  const handleAddBanner = async () => {
    if (!file) {
      alert("파일을 선택해주세요.");
      return;
    }

    try {
      await addBanner(file);
      setFile(null);
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "배너 추가에 실패했습니다."
      );
    }
  };

  const handleUpdateBanner = async () => {
    if (!file || editingBannerId === null) {
      alert("파일을 선택해주세요.");
      return;
    }

    try {
      await updateBanner(editingBannerId, file);
      setFile(null);
      setEditingBannerId(null);
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "배너 수정에 실패했습니다."
      );
    }
  };

  const handleDeleteBanner = async (id: number) => {
    try {
      await deleteBanner(id);
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "배너 삭제에 실패했습니다."
      );
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto mt-10">
        <div className="mb-5">
          <h1 className="font-bold text-3xl mb-10">Board Banner</h1>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="mb-2"
            hidden
            ref={fileInputRef}
          />
          <button
            onClick={openFileUpload}
            className="bg-blue-500 text-white p-2 rounded mr-2"
          >
            파일 선택
          </button>
          {editingBannerId === null ? (
            <button
              onClick={handleAddBanner}
              className="bg-green-500 text-white p-2 rounded"
            >
              배너 추가
            </button>
          ) : (
            <button
              onClick={handleUpdateBanner}
              className="bg-yellow-500 text-white p-2 rounded"
            >
              배너 수정
            </button>
          )}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {banners &&
            banners.map((banner: Banner) => (
              <li
                key={banner.id}
                className="border rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={banner.bannerImageURL}
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setEditingBannerId(banner.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => handleDeleteBanner(banner.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
