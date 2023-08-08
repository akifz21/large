import { Auth } from "./Auth";
import ThemeDropdown from "./ThemeDropdown";
import Logo from "./Logo";

const Header = () => {
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
        <div className="nav-item">Contact</div>
      </div>
      <Auth />
    </header>
  );
};

export default Header;
