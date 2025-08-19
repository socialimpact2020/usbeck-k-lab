import { Metadata } from "next";
import ProgramDetailPage from "@/components/Education/EducationDetailPage";
import { fetchProgramData } from "@/libs/server/api";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetchProgramData(params.id, "sw");

  if (!response || !response.ok || !response.courseDetail) {
    return {
      title: "Program Not Found - K-LAB IT ACADEMY",
      description: "The requested program could not be found.",
    };
  }

  

  const programData = response.courseDetail;
  console.log("??")

  return {
    title: `${programData.title} - K-LAB IT ACADEMY`,
    description: programData.content.replace(/<[^>]*>/g, "").slice(0, 160),
    openGraph: {
      title: `${programData.title} - K-LAB IT ACADEMY`,
      description: programData.content.replace(/<[^>]*>/g, "").slice(0, 160),
      images: [
        {
          url: programData.thumbnailURL,
          width: 1200,
          height: 630,
          alt: "IT ACADEMY Program Detail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${programData.title} - K-LAB IT ACADEMY`,
      description: programData.content.replace(/<[^>]*>/g, "").slice(0, 160),
      images: [programData.thumbnailURL],
    },
  };
}

export default function ProgramDetail({ params }: { params: { id: string } }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    provider: { "@type": "Organization", name: "K LAB Uzbekistan" },
    name: "IT ACADEMY",
    url: `https://www.klabuzb.com/programs/sw/${params.id}`,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProgramDetailPage id={params.id} programType="sw" />
    </>
  );
}
