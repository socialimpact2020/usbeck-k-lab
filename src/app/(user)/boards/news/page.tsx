import { Metadata } from "next";
import BoardLayout from "@/components/layouts/BoardLayout";
import NewsContent from "@/components/Boards/NewsContent";
import Tab from "@/components/UI/Boards/Tab";

export const metadata: Metadata = {
  title: "News | Uzbekistan K_LAB",
  description: "Latest news from K_LAB",
};

export default function News() {
  return (
    <BoardLayout title="News" depth={["Boards", "News"]}>
      <Tab selectedTab="news" />
      <NewsContent />
    </BoardLayout>
  );
}
