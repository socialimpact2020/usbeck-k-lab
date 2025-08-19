import { Metadata } from "next";
import BoardLayout from "@/components/layouts/BoardLayout";

import OnlineTrainingContent from "@/components/Boards/OnlineTrainingContent";

export const metadata: Metadata = {
  title: "Online Training",
  description: "Online training resources and materials provided by K LAB Uzbekistan.",
  alternates: { canonical: "/programs/ot" },
  openGraph: {
    type: "website",
    url: "https://www.klabuzb.com/programs/ot",
    siteName: "K LAB Uzbekistan",
    title: "Online Training",
    description: "Online training resources and materials provided by K LAB Uzbekistan.",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp",
        width: 1200,
        height: 630,
        alt: "Online Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Training",
    description: "Online training resources and materials provided by K LAB Uzbekistan.",
    images: [
      "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp",
    ],
  },
};

export default function OnlineTraining() {
  return (
    <BoardLayout
      title="Online Training"
      depth={["Programs", "Online Training"]}
      imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp"
      guideText="K-LAB PROGRAMS"
    >
      <OnlineTrainingContent />
    </BoardLayout>
  );
}
