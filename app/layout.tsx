import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./_components/common/Container";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "800", "900", '400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html  className={poppins.className} lang="en">
      <body >
      <Container>
          <main className="
            px-8 sm:px-16 md:px-36 lg:px-52 2xl:px-60
          bg-light-color text-dark-color dark:bg-dark-color
            transition-colors  
            pt-24
           dark:text-light-color min-h-screen">
            {children}
          </main>
        </Container>
      </body>
    </html>
  );
}
