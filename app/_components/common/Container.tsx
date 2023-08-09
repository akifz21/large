import { Providers } from "../../_stores/provider";
import Theme from "../appearence/Theme";
import Footer from "./Footer";
import Header from "./Header";
import { SiteProvider } from "@/app/_contexts/SiteContext";
import { Toaster } from "react-hot-toast";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <SiteProvider>
        <Providers>
          <Theme />
          <div className="flex flex-col min-h-screen justify-between">
            <Header />
            <main
              className="
            px-8 sm:px-16 md:px-36 xl:px-52 2xl:px-60
          bg-light-color text-dark-color dark:bg-dark-color
            transition-colors  
            pt-28
            pb-14
           dark:text-light-color "
            >
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </SiteProvider>
    </>
  );
};

export default Container;
