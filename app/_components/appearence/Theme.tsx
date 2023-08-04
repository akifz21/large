"use client";
import { useSiteContext } from "@/app/_contexts/SiteContext";
import useColorScheme from "@/app/_hooks/use-color-scheme";
import { useTheme } from "@/app/_stores/site/hooks";
import React, { useEffect } from "react";

const Theme = () => {
  const { state } = useSiteContext();
  const colorSchema = useColorScheme();

  useEffect(() => {
    if (state.theme === "system") {
      document.body.className = colorSchema;
    } else {
      document.body.className = state.theme;
    }
    localStorage.setItem("theme", state.theme);
  }, [state, colorSchema]);
  return <></>;
};

export default Theme;
