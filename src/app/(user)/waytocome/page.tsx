import { Metadata } from "next";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import Wayto from "@/components/client/Wayto";

export const metadata: Metadata = {
  title: `Way to come | Uzbekistan K_LAB`,
  description:
    "Sharkhrisabz Street, 25, Mirabod district, Tashkent city, Uzbekistan (basement)",
  openGraph: {
    title: "Way to come",
    url: "https://www.klabuzb.com/waytocome",
    type: "website",
    images: [
      {
        url: "https://d2p8484c990lgc.cloudfront.net/KLAB/next/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

const BANNER_IMAGE_URL =
  "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_about_banner..webp";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5994.381531241549!2d69.28084009302125!3d41.30471344103923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad671d84dcb%3A0x3175fb9f24cd3354!2sShakhrisabz%20Street%2025%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2skr!4v1719911360020!5m2!1sen!2skr";

const PageTitle: React.FC = () => (
  <div className="text-center space-y-2 mb-10">
    <h4 className="text-gray-400 text-sm font-bold">K-LAB GUIDE</h4>
    <h2 className="font-bold text-2xl">Way to come</h2>
  </div>
);

const MapEmbed: React.FC = () => (
  <div className="mb-10">
    <iframe
      src={MAP_EMBED_URL}
      width="100%"
      height="700"
      loading="lazy"
    ></iframe>
  </div>
);

export default function WaytoCome() {
  return (
    <div>
      <CurrentSection
        text="Way to come"
        imageUrl={BANNER_IMAGE_URL}
        styles="bg-cover"
      />

      <CurrentDepth depth={["Center", "Way to come"]} />

      <SectionWrapper>
        <PageTitle />
        <MapEmbed />
        <Wayto />
      </SectionWrapper>
    </div>
  );
}
