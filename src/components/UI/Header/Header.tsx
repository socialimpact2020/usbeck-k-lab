import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";

const MENU_LIST = ["센터 소개", "오시는 길", "교육 프로그램", "센터 소식"];

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-5  max-w-7xl m-auto">
      <Image src={logo} alt="header logo" className="w-52 object-cover" />

      <nav className="space-x-5">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            센터 소개
          </div>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            오시는 길
          </div>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            교육 프로그램
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <Link href="#">교육 1</Link>
            </li>
            <li>
              <Link href="#">교육 2</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            센터 소식
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <Link href="#">공지사항</Link>
            </li>
            <li>
              <Link href="#">언론보도</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
