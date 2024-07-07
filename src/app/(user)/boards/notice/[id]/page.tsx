import PostDetail from "@/components/Boards/PostDetail";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { getPostDetail } from "@/libs/server/api";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const post = await getPostDetail(id);

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  const description = post?.content
    ? stripHtml(post.content).substring(0, 160)
    : "Notice Detail";

  return {
    title: post?.title || "Notice",
    description: description,
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getPostDetail(id);

  console.log(id);
  console.log(data);

  if (!data) {
    notFound();
  }

  return (
    <div>
      <CurrentSection
        text="Notice"
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp"
        styles="bg-cover"
      />
      <CurrentDepth depth={["Boards", "Notice", "Detail"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">K-LAB GUIDE</h4>
          <h2 className="font-bold text-2xl">{data.type}</h2>
        </div>

        <PostDetail data={data} />
      </SectionWrapper>
    </div>
  );
}
