"use client";
import Image from "next/image";
import { useTheme } from "./stores/site/hooks";
import { setTheme } from "@/app/stores/site/actions";
import useColorScheme from "./hooks/use-color-scheme";
import { useEffect } from "react";

export default function Home() {
  const theme = useTheme();
  const colorSchema = useColorScheme();

  return (
    <>
      <header className="bg-white text-black dark:bg-gray-600 dark:text-white text-center h-15">
        test - header
      </header>
      <button onClick={() => setTheme("system")}>System Theme</button>
      <button onClick={() => setTheme("light")}>Light Theme</button>
      <button onClick={() => setTheme("dark")}>Dark Theme</button>
    </>
  );
}
