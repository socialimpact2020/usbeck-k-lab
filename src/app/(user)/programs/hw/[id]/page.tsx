import { Metadata } from "next";
import ProgramDetailPage from "@/components/Education/EducationDetailPage";
import { fetchProgramData } from "@/libs/server/api";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetchProgramData(params.id, "hw");

  if (!response || !response.ok || !response.courseDetail) {
    return {
      title: "Program Not Found - K-LAB Digital Manufacturing",
      description: "The requested program could not be found.",
    };
  }

  const programData = response.courseDetail;

  return {
    title: `${programData.title} - K-LAB Digital Manufacturing`,
    description: programData.content.replace(/<[^>]*>/g, "").slice(0, 160), // HTML 태그 제거 후 160자로 제한
    openGraph: {
      title: `${programData.title} - K-LAB Digital Manufacturing`,
      description: programData.content.replace(/<[^>]*>/g, "").slice(0, 160),
      images: [
        {
          url: programData.thumbnailURL,
          width: 1200,
          height: 630,
          alt: "Digital Manufacturing Program Detail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${programData.title} - K-LAB Digital Manufacturing`,
      description: programData.content.replace(/<[^>]*>/g, "").slice(0, 160),
      images: [programData.thumbnailURL],
    },
  };
}

export default function ProgramDetail({ params }: { params: { id: string } }) {
  return <ProgramDetailPage id={params.id} programType="hw" />;
}
