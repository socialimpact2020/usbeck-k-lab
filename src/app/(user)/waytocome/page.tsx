import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import Wayto from "@/components/client/Wayto";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Way to come | Uzbekistan K_LAB MAKER SPACE`,
  description:
    "Sharkhrisabz Street, 25, Mirabod district, Tashkent city, Uzbekistan (basement)",
  openGraph: {
    title: "Way to come",
    url: "https://www.nipak-labuzb.co.kr/waytocome",
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

export default function WaytoCome() {
  return (
    <div>
      <CurrentSection text="Way to come" />

      <CurrentDepth depth={["Center", "Way to come"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">
            K-LAB MAKER SPACE GUIDE
          </h4>
          <h2 className="font-bold text-2xl">Way to come</h2>
        </div>

        <div className="mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1518968960327!2d69.27849151203073!3d41.30555907119057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad671d84dcb%3A0x3175fb9f24cd3354!2zMjUgU2hha2hyaXNhYnogU3RyZWV0LCBUYXNoa2VudCwg7Jqw7KaI67Kg7YKk7Iqk7YOE!5e0!3m2!1sko!2skr!4v1703168927173!5m2!1sko!2skr"
            width="100%"
            height="700"
            loading="lazy"
          ></iframe>
        </div>

        <Wayto />
      </SectionWrapper>
    </div>
  );
}
