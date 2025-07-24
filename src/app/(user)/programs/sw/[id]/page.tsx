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
  return <ProgramDetailPage id={params.id} programType="sw" />;
}
