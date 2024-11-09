import type { Metadata } from "next";
import localFont from "next/font/local";
// import {Sora} from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/component/Home/Navbar/ResponsiveNav";
import Footer from "@/component/Home/Footer/Footer";
import ScrollToTop from "@/component/Helper/ScrollToTop";



// const font=Sora({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', ],
//   subsets: ['latin'],
// })
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio With Next.js", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ResponsiveNav/>  
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
