import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer
      className="
        h-24
        relative
      
        bottom-0
        w-full
         flex items-center
          justify-between 
          px-8 sm:px-16 md:px-36 lg:px-52 2xl:px-60
            border-t tracking-wide
            "
    >
      <div className="flex items-center gap-2">
        <span>&copy; 2023 </span> <Logo className="text-sm top-1.5" />
      </div>
      <p>Follow us on social media</p>
    </footer>
  );
};

export default Footer;
