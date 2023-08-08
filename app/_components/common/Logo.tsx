import { cn } from "@/app/_lib/utils";
import Link from "next/link";
import React from "react";
import { BsChevronCompactLeft as LeftArrow } from "react-icons/bs";
import { BsChevronCompactRight as RightArrow } from "react-icons/bs";

type LogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Link
      href={"/"}
      className={cn("inline-flex gap-1 items-center", className)}
    >
      <LeftArrow size={30} />
      <span className={cn("font-borel relative top-2", className)} {...props}>
        b-log
      </span>
      <RightArrow size={30} />
    </Link>
  );
};

export default Logo;
