"use client";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
import { urls } from "@/config/site";

import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex items-center max-w-7xl justify-between m-auto">
      <Link href={urls.home}>
        <Image src={logo} alt="header logo" className="w-48 object-cover" />
      </Link>

      <nav className="space-x-5">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            <Link href={urls.aboutus}>About Us</Link>
          </div>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            <Link href={urls.waytocome}>Way to come</Link>
          </div>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            Programs
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
          >
            <li>
              <Link href={urls.sw}>SW Education</Link>
            </li>
            <li>
              <Link href={urls.hw}>HW Education</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">
            Board
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 -left-16"
          >
            <li>
              <Link href={urls.notice}>Notice</Link>
            </li>
            <li>
              <Link href={urls.news}>News</Link>
            </li>
          </ul>
        </div>

        {session && (
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              <Link href={urls.dashboard}>Dashboard</Link>
            </div>
          </div>
        )}
        {session && (
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              <span onClick={() => signOut()}>Sign out</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
