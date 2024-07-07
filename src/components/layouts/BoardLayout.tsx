import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";

interface BoardLayoutProps {
  title: string;
  depth: string[];
  children: React.ReactNode;
}

export default function BoardLayout({
  title,
  depth,
  children,
}: BoardLayoutProps) {
  return (
    <div>
      <CurrentSection
        text={title}
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp"
        styles="bg-cover"
      />
      <CurrentDepth depth={depth} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">K-LAB GUIDE</h4>
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>

        {children}
      </SectionWrapper>
    </div>
  );
}
