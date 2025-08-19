import { Metadata } from "next";
import EducationPage from "@/components/Education/EducationPage";

export const metadata: Metadata = {
  title: "IT ACADEMY Programs",
  description:
    "Discover K LAB Uzbekistan's IT ACADEMY programs including Basic, Developer, and Expert levels.",
  alternates: { canonical: "/programs/sw" },
  openGraph: {
    type: "website",
    url: "https://www.klabuzb.com/programs/sw",
    siteName: "K LAB Uzbekistan",
    title: "IT ACADEMY Programs",
    description:
      "Discover K LAB Uzbekistan's IT ACADEMY programs including Basic, Developer, and Expert levels.",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp",
        width: 1200,
        height: 630,
        alt: "IT ACADEMY Programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT ACADEMY Programs",
    description:
      "Discover K LAB Uzbekistan's IT ACADEMY programs including Basic, Developer, and Expert levels.",
    images: [
      "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_programs_banner.webp",
    ],
  },
};

export default function SWEducation() {
  return (
    <EducationPage
      title="IT ACADEMY"
      subtitle="Programs - IT ACADEMY"
      tabs={[
        { tabLabel: "View All", tabValue: "" },
        { tabLabel: "Basic", tabValue: "Basic" },
        { tabLabel: "Developer", tabValue: "Developer" },
        { tabLabel: "Expert", tabValue: "Expert" },
      ]}
      apiPath="/api/edu/sw"
      linkPrefix="/programs/sw"
    />
  );
}
