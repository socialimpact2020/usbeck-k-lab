import { Metadata, ResolvingMetadata } from "next";
import PostDetail from "@/components/Boards/PostDetail";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { getPostDetail } from "@/libs/server/api";
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
    : "News Detail";
  const image = "https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp";

  const pageUrl = `https://www.klabuzb.com/boards/news/${id}`;

  return {
    title: post?.title || "News",
    description,
    alternates: { canonical: `/boards/news/${id}` },
    openGraph: {
      type: "article",
      url: pageUrl,
      siteName: "K LAB Uzbekistan",
      title: post?.title || "News",
      description,
      images: [
        { url: image, width: 1200, height: 630, alt: post?.title || "News Detail" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title || "News",
      description,
      images: [image],
    },
  };
}

export default async function Post({ params }: Props) {
  const { id } = params;
  const data = await getPostDetail(id);

  if (!data) {
    notFound();
  }

  const pageUrl = `https://www.klabuzb.com/boards/news/${id}`;
  const description = data?.content
    ? data.content.replace(/<[^>]*>?/gm, "").substring(0, 160)
    : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data?.title,
    description,
    datePublished: data?.createdAt,
    dateModified: data?.updatedAt,
    author: { "@type": "Organization", name: "K LAB Uzbekistan" },
    publisher: { "@type": "Organization", name: "K LAB Uzbekistan" },
    mainEntityOfPage: pageUrl,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CurrentSection
        text="News"
        imageUrl="https://d2p8484c990lgc.cloudfront.net/KLAB/klab_board_banner.webp"
        styles="bg-cover"
      />
      <CurrentDepth depth={["Boards", "News", "Detail"]} />

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
