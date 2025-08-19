import { Metadata } from "next";
import BoardLayout from "@/components/layouts/BoardLayout";
import NoticeContent from "@/components/Boards/NoticeContent";
import Tab from "@/components/UI/Boards/Tab";

export const metadata: Metadata = {
  title: "Notice",
  description: "Important notices and announcements from K LAB Uzbekistan.",
  alternates: { canonical: "/boards/notice" },
  openGraph: {
    type: "website",
    url: "https://www.klabuzb.com/boards/notice",
    siteName: "K LAB Uzbekistan",
    title: "Notice",
    description: "Important notices and announcements from K LAB Uzbekistan.",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp",
        width: 1200,
        height: 630,
        alt: "Notice Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notice",
    description: "Important notices and announcements from K LAB Uzbekistan.",
    images: [
      "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp",
    ],
  },
};

export default function Notice() {
  return (
    <BoardLayout title="Notice" depth={["Boards", "Notice"]}>
      <Tab selectedTab="notice" />
      <NoticeContent />
    </BoardLayout>
  );
}
