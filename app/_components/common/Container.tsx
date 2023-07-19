'use client'

import { ToastContainer } from "react-toastify"
import { Providers } from "../../_stores/provider"
import Theme from "../appearence/Theme"

import Footer from "./Footer"
import dynamic from "next/dynamic"

const Header = dynamic(() => import('./Header'), {
    ssr: false,
})
export const Container = ({children}:{
    children:any
}) => {
  return (
    <>
          <Providers>
              <Theme />
              <Header />
              <ToastContainer />
              {children}
              </Providers>
          <Footer />
    </>
  )
}
