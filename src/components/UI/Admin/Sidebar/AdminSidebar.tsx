"use client";
import { urls } from "@/config/site";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const isCurrentRoute = (url: string) => pathname === url;

  return (
    <>
      <aside className="w-72 h-full bg-[#182A3E] fixed">
        <div className="w-full bg-[#204162] max-h-40 h-full flex justify-center items-center flex-col space-y-1 relative">
          <span className="text-xs text-gray-400">
            Uzbekistan K_LAB MAKER SPACE
          </span>
          <Link href={urls.dashboard} className="text-white text-xl font-bold">
            ADMIN PANEL
          </Link>
          <div className="flex items-center space-x-2">
            <div className="bg-[#206069] w-3 rounded-full h-3"></div>
            <p className="text-[#3CA587] text-xs font-bold">ONLINE</p>
          </div>

          <span
            className="text-xs text-white absolute right-2 bottom-2 cursor-pointer"
            onClick={() => signOut()}
          >
            SIGN OUT
          </span>
        </div>

        <Link
          href={urls.home}
          className="flex justify-center py-5 border-b-[1px] border-b-slate-700 items-center space-x-1 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span className="text-white text-sm">Go Home</span>
        </Link>
        <div>
          <div className="collapse collapse-open	">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-md font-medium text-white">
              Profile
            </div>
            <div className="collapse-content">
              <Link
                href={urls.dashboard}
                className={`text-xs ${
                  isCurrentRoute(urls.dashboard)
                    ? "text-cyan-500 font-bold"
                    : "text-white"
                }`}
              >
                ⦁ &nbsp; Profile Update
              </Link>
            </div>
          </div>

          <div className="collapse collapse-open	">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-md font-medium text-white">
              Boards
            </div>
            <div className="collapse-content flex flex-col space-y-2">
              <Link
                href={urls.dashboardBoards}
                className={`text-xs ${
                  isCurrentRoute(urls.dashboardBoards)
                    ? "text-cyan-500 font-bold"
                    : "text-white"
                }`}
              >
                ⦁ &nbsp; Boards
              </Link>
            </div>
          </div>

          <div className="collapse collapse-open	">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-md font-medium text-white">
              Education
            </div>
            <div className="collapse-content flex flex-col space-y-2">
              <Link
                href={urls.dashboardSW}
                className={`text-xs ${
                  isCurrentRoute(urls.dashboardSW)
                    ? "text-cyan-500 font-bold"
                    : "text-white"
                }`}
              >
                ⦁ &nbsp; SW Education
              </Link>
              <Link
                href={urls.dashboardHW}
                className={`text-xs ${
                  isCurrentRoute(urls.dashboardHW)
                    ? "text-cyan-500 font-bold"
                    : "text-white"
                }`}
              >
                ⦁ &nbsp; HW Education
              </Link>
            </div>
          </div>
        </div>
      </aside>
      <div className="w-72"></div>
    </>
  );
}
