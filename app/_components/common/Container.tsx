import { ToastContainer } from "react-toastify"
import { Providers } from "../../_stores/provider"
import Theme from "../appearence/Theme"
import Footer from "./Footer"
import Header from "./Header"

export const Container = ({ children }: {
  children: any
}) => {

  return (
    <>
      <Providers>
        <Theme />
        <Header />
        <ToastContainer />
        <main
        className="
            px-8 sm:px-16 md:px-36 xl:px-52 2xl:px-60
          bg-light-color text-dark-color dark:bg-dark-color
            transition-colors  
            py-28
           dark:text-light-color min-h-screen">
          {children}
        </main>
      </Providers>
      <Footer />
    </>
  )
}
