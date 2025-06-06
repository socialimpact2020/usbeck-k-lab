import { Post } from "@prisma/client";

interface IResponsePostDetail {
  ok: boolean;
  postDetail: Post;
}

export async function getPostDetail(id: string): Promise<Post | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "https://www.nipak-labuzb.co.kr";
    const response = await fetch(`${baseUrl}/api/post/detail/${id}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post detail");
    }

    const data: IResponsePostDetail = await response.json();

    if (!data.ok) {
      return null;
    }

    return data.postDetail;
  } catch (error) {
    console.error("Error fetching post detail:", error);
    return null;
  }
}

export interface ProgramResponse {
  ok: boolean;
  courseDetail: {
    id: number;
    category: string;
    subcategory: string;
    thumbnailURL: string;
    title: string;
    linkURL: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    recruitmentPeriodId: number;
    progressPeriodId: number;
    recruitmentPeriod: {
      id: number;
      startDate: string;
      endDate: string;
    };
    progressPeriod: {
      id: number;
      startDate: string;
      endDate: string;
    };
  };
}

export async function fetchProgramData(
  id: string,
  programType: "hw" | "sw"
): Promise<ProgramResponse | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "https://www.nipak-labuzb.co.kr";

     
    const response = await fetch(`${baseUrl}/api/edu/${id}`, {
      next: { revalidate: 60 },
    });

 

    

    if (!response.ok) {
      throw new Error("Failed to fetch program data");
    }

    const data: ProgramResponse = await response.json();
 
    return data;
  } catch (error) {
    console.error("Error fetching program data:", error);
    return null;
  }
}
