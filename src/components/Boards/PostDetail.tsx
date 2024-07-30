"use client";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IPostDetailProps {
  data: {
    content: string;
    createdAt: Date;
    id: number;
    title: string;
    type: string;
    updatedAt: Date;
    views: number;
  };
}

export default function PostDetail({ data }: IPostDetailProps) {
  const router = useRouter();
  const [contentHTML, setContentHTML] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      DOMPurify.addHook("afterSanitizeAttributes", function (node) {
        if (node.tagName === "IFRAME") {
          const src = node.getAttribute("src");
          if (src && src.startsWith("https://www.youtube.com/embed/")) {
            node.setAttribute("frameborder", "0");
            node.setAttribute("allowfullscreen", "true");
          } else {
            node.remove();
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      const sanitizedContent = DOMPurify.sanitize(data.content, {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: [
          "allow",
          "allowfullscreen",
          "frameborder",
          "src",
          "alt",
          "title",
        ],
        ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?:)?\/\/)|(?:data:image\/)/i,
      });
      setContentHTML(sanitizedContent);
    }
  }, [data]);

  if (!data) {
    router.push("/404");
    return null;
  }

  return (
    <>
      <div className="mt-10 pt-10  border-t-gray-300 ">
        <div className="flex items-end justify-between border-b-2 border-b-gray-300 pb-5">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <div className="min-w-[160px]">
            <p className="text-gray-500 text-right">Views {data.views}</p>
            <p className="text-gray-500">
              Created {data.createdAt.toString().split("T")[0]}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-3 pb-3 border-b-gray-300 border-b-2 mb-3 sanitized-parent">
        <div dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
      </div>

      <div className="flex justify-end">
        <button
          className="bg-black text-white px-4 rounded-md text-sm py-2"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </>
  );
}
