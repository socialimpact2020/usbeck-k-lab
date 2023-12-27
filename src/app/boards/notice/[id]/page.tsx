"use client";
import CurrentDepth from "@/components/UI/CurrentDepth";
import CurrentSection from "@/components/UI/CurrentSection";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { suitFont } from "@/config/font";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Post() {
  const { id } = useParams();
  const router = useRouter();

  const messages = `2023년을 열정으로 불태운 강남 취ㆍ창업허브센터 입주 기업의 데모데이가 열렸습니다!
스타트업의 꽃인 데모데이는 지난 1년 동안의 입주 기업의 성과를 공유하는 자리입니다.
VC 투자연계를 더불어서 역량을 강화할 수 있는 네트워킹을 할 수 있도록 전문 심사위원들을 한자리에 모셨습니다.

시장을 뒤흔들고 있는 강남 취ㆍ창업허브센터 입주 기업의 데모데이에 여러분을 초대합니다.

DEMODAY DAY Ⅰ
일정 : 2023년 12월 20일(수) 10:30 ~ 14:30
  
DEMODAY DAY Ⅱ
일정 : 2023년 12월 21일(목) 11:00 ~ 15:30
  
발표 기업 : 강남 취ㆍ창업허브센터 입주사 16개사
모집 대상 : 강남 취ㆍ창업허브센터 데모데이에 관심 있는 누구나
신청 : 온라인 신청
장소 : 강남 취ㆍ창업허브센터 1층 라운지 (서울특별시 강남구 역삼로 160)
진행 : 온라인(유튜브 스트리밍)/오프라인(강남 취ㆍ창업허브센터 1층 라운지)
  
온오프라인 모두 진행하오니, 많은 시청과 참여바랍니다.
  
감사합니다.`;

  return (
    <div>
      <CurrentSection text="Notice" />
      <CurrentDepth depth={["Boards", "Notice", "Detail"]} />

      <SectionWrapper>
        <div className="text-center space-y-2 mb-10">
          <h4 className="text-gray-400 text-sm font-bold">
            K_LAB MAKER SPACE GUIDE
          </h4>
          <h2 className="font-bold text-2xl">Notice</h2>
        </div>

        <div className="mt-10 pt-10  border-t-gray-300 ">
          <div className="flex items-end justify-between border-b-2 border-b-gray-300 pb-5">
            <h1 className="text-3xl font-bold">Coming soon..</h1>
            <div className="min-w-[150px]">
              <p className="text-gray-500 text-right">Views 0</p>
              <p className="text-gray-500">Created 2023-12-21</p>
            </div>
          </div>
        </div>

        <div className="pt-3 pb-3 border-b-gray-300 border-b-2 mb-3">
          <pre
            className={suitFont.className + " max-w-7xl whitespace-pre-wrap"}
          >
            {messages}
          </pre>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-black text-white px-4 rounded-md text-sm py-2"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}
