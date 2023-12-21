import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-5  max-w-7xl m-auto">
      <Image src={logo} alt="header logo" className="w-52 object-cover" />

      <nav className="space-x-5">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            About Us
          </div>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            Way to come
          </div>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            Programs
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <Link href="#">SW Education</Link>
            </li>
            <li>
              <Link href="#">HW Education</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            Board
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <Link href="#">Notice</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
