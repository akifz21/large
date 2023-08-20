"use client";
import Logo from "./Logo";
import React from "react";
import Auth from "./Auth";
import ThemeDropdown from "./ThemeDropdown";
import Link from "next/link";
import { useUser } from "@/app/_stores/user/hooks";

const Header = () => {
  const user = useUser();
  return (
    <header
      className="
             fixed
             flex flex-row 
             z-50
             px-8 sm:px-16 md:px-36 lg:px-52 2xl:px-60
             w-full items-center justify-between
             top-0 h-20 
             text-md border-b
             border-slate-500
             border-opacity-20
             bg-light-color text-dark-color  dark:bg-dark-color transition-colors dark:text-light-color
             "
    >
      <div className="flex gap-7 items-center">
        <Logo className="text-2xl" />
        <div className="nav-item ml-5">About</div>
        <Link href={"/contact"} className="nav-item">
          Contact
        </Link>
      </div>
      <div className="flex gap-7 items-center">
        {user?.role === "ADMIN" && (
          <Link className="nav-item" href={"/dashboard"}>
            Dashboard
          </Link>
        )}
        <ThemeDropdown />
        <Auth />
      </div>
    </header>
  );
};

export default Header;
