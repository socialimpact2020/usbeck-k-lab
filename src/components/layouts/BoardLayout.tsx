import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";

interface BoardLayoutProps {
  title: string;
  depth: string[];
  imageUrl?: string;
  guideText?: string;
  children: React.ReactNode;
}

export default function BoardLayout({
  title,
  depth,
  children,
  imageUrl = "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp",
  guideText = "K-LAB GUIDE",
}: BoardLayoutProps) {
  return (
    <div>
      <CurrentSection
        text={title}
        imageUrl={imageUrl}
        styles="bg-cover bg-blend-darken bg-black bg-opacity-50"
      />
      <CurrentDepth depth={depth} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">{guideText}</h4>
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>

        {children}
      </SectionWrapper>
    </div>
  );
}
