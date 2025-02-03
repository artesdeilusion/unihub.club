import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
 
const outfit = Outfit({
   subsets: ["latin"],
});
 

export const metadata: Metadata = {
  title: "UniHub Club",
  description: "Geleceğini Bugünden Keşfet, UniHub ile Yüksel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html    lang="tr">
       
      <body
        className={outfit.className}>
          <nav>
        <Navbar></Navbar>
      </nav>
        {children}
        <footer className="light bg-white">
<Footer></Footer>
        </footer>  
      </body>
         </html>
  );
}
