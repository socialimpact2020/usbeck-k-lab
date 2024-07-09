import { Metadata } from "next";
import BoardLayout from "@/components/layouts/BoardLayout";

import OnlineTrainingContent from "@/components/Boards/OnlineTrainingContent";

export const metadata: Metadata = {
  title: "Notice | Uzbekistan K_LAB",
  description: "Important notices from K_LAB",
};

export default function OnlineTraining() {
  return (
    <BoardLayout
      title="Online Training"
      depth={["Programs", "Online Training"]}
      imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp"
      guideText="K-LAB PROGRAMS GUIDE"
    >
      <OnlineTrainingContent />
    </BoardLayout>
  );
}
