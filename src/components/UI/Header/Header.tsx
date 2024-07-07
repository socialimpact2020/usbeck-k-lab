"use client";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
import { urls } from "@/config/site";

import { signOut, useSession } from "next-auth/react";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <header className="flex items-center max-w-7xl justify-between m-auto py-8">
      <Link href={urls.home}>
        <Image src={logo} alt="header logo" className="w-44 object-cover" />
      </Link>

      <nav className="space-x-5">
        <Link href={urls.aboutus} className="">
          About Us
        </Link>
        <Link href={urls.waytocome} className="">
          Way to come
        </Link>

        <div className="dropdown dropdown-hover group">
          <Link href={urls.programs} className="">
            <span tabIndex={0} className="cursor-pointer">
              Programs
            </span>
          </Link>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[220px] hidden group-hover:block">
            <li>
              <Link href={urls.sw}>IT ACADEMY</Link>
            </li>
            <li>
              <Link href={urls.hw}>Digital Manufacturing</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover group">
          <Link href={urls.notice} className="">
            <span tabIndex={0} className="cursor-pointer">
              Board
            </span>
          </Link>
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 -left-16 hidden group-hover:block">
            <li>
              <Link href={urls.notice}>Notice</Link>
            </li>
            <li>
              <Link href={urls.news}>News</Link>
            </li>
          </ul>
        </div>

        {session && (
          <Link href={urls.dashboard} className="">
            Dashboard
          </Link>
        )}
        {session && (
          <span onClick={() => signOut()} className="cursor-pointer ">
            Sign out
          </span>
        )}
      </nav>
    </header>
  );
}
