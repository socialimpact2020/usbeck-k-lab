import { Metadata } from "next";
import BoardLayout from "@/components/layouts/BoardLayout";
import NewsContent from "@/components/Boards/NewsContent";

export const metadata: Metadata = {
  title: "News | Uzbekistan K_LAB",
  description: "Latest news from K_LAB",
};

export default function News() {
  return (
    <BoardLayout title="News" depth={["Boards", "News"]}>
      <NewsContent />
    </BoardLayout>
  );
}
