import { Metadata } from "next";
import EducationPage from "@/components/Education/EducationPage";

export const metadata: Metadata = {
  title: "Digital Manufacturing Programs - K-LAB",
  description:
    "Explore K-LAB's Digital Manufacturing programs. We offer various courses including Open Up and Special Course.",
  openGraph: {
    title: "Digital Manufacturing Programs - K-LAB",
    description:
      "Explore K-LAB's Digital Manufacturing programs. We offer various courses including Open Up and Special Course.",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp",
        width: 1200,
        height: 630,
        alt: "Digital Manufacturing Programs Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Manufacturing Programs - K-LAB",
    description:
      "Explore K-LAB's Digital Manufacturing programs. We offer various courses including Open Up and Special Course.",
    images: [
      "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp",
    ],
  },
};

export default function HWEducation() {
  return (
    <EducationPage
      title="Digital Manufacturing"
      subtitle="Programs - Digital Manufacturing"
      tabs={[
        { tabLabel: "View All", tabValue: "" },
        { tabLabel: "Open Up", tabValue: "OpenUp" },
        { tabLabel: "Special Course", tabValue: "SpecialCourse" },
      ]}
      apiPath="/api/edu/hw"
      linkPrefix="/programs/hw"
    />
  );
}
