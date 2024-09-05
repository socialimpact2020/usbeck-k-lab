import { Metadata } from "next";
import BoardLayout from "@/components/layouts/BoardLayout";
import NoticeContent from "@/components/Boards/NoticeContent";
import Tab from "@/components/UI/Boards/Tab";

export const metadata: Metadata = {
  title: "Notice | Uzbekistan K_LAB",
  description: "Important notices from K_LAB",
};

export default function Notice() {
  return (
    <BoardLayout title="Notice" depth={["Boards", "Notice"]}>
      <Tab selectedTab="notice" />
      <NoticeContent />
    </BoardLayout>
  );
}
