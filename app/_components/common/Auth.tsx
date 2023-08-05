"use client";
import { useEffect } from "react";
import { useIsLoggedIn } from "@/app/_stores/user/hooks";
import React from "react";
import LoginModal from "./LoginModal";
import ProfileDropdown from "./ProfileDropdown";
import { setInitial } from "@/app/_stores/user/actions";
import RegisterModal from "./RegisterModal";

export const Auth = () => {
  const isLoggedIn = useIsLoggedIn();
  useEffect(() => {
    setInitial();
  }, []);
  return (
    <div>
      {!isLoggedIn ? (
        <div className="flex flex-row gap-10">
          <LoginModal />
          <RegisterModal />
        </div>
      ) : (
        <>
          <ProfileDropdown />
        </>
      )}
    </div>
  );
};
