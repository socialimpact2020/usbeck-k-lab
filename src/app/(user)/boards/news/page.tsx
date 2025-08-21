import { Metadata } from "next";
import BoardLayout from "@/components/layouts/BoardLayout";
import NewsContent from "@/components/Boards/NewsContent";
import Tab from "@/components/UI/Boards/Tab";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from K LAB Uzbekistan.",
  alternates: { canonical: "/boards/news" },
  openGraph: {
    type: "website",
    url: "https://www.klabuz.com/boards/news",
    siteName: "K LAB Uzbekistan",
    title: "News",
    description: "Latest news and updates from K LAB Uzbekistan.",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp",
        width: 1200,
        height: 630,
        alt: "News Board",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News",
    description: "Latest news and updates from K LAB Uzbekistan.",
    images: [
      "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp",
    ],
  },
};

export default function News() {
  return (
    <BoardLayout title="News" depth={["Boards", "News"]}>
      <Tab selectedTab="news" />
      <NewsContent />
    </BoardLayout>
  );
}
