"use client";
import { useEffect } from "react";
import { useIsLoggedIn } from "@/app/_stores/user/hooks";
import React from "react";
import LoginModal from "./LoginModal";
import ProfileDropdown from "./ProfileDropdown";
import { setInitial } from "@/app/_stores/user/actions";
import RegisterModal from "./RegisterModal";
import Link from "next/link";

export const Auth = () => {
  const isLoggedIn = useIsLoggedIn();
  useEffect(() => {
    setInitial();
  }, []);
  return (
    <div>
      {!isLoggedIn ? (
        <div className="flex flex-row items-center gap-7">
          <Link
            href={"/login"}
            // type="button"
            // onClick={openModal}
            className="nav-item"
          >
            Login
          </Link>
          <Link
            href={"/signup"}
            // type="button"
            // onClick={openModal}
            className="nav-item bg-black rounded text-white py-2 px-4"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <>
          <ProfileDropdown />
        </>
      )}
    </div>
  );
};
