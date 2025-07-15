"use client";

import "./globals.css";
import { Lato } from "next/font/google";
<<<<<<< HEAD
import Navbar from "./navbar";
=======
import Navbar from "../components/layout/navbar";

>>>>>>> afef0ebe191f3880e8b300154f0f7d7c21eb42f1
import { usePathname } from "next/navigation";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={lato.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}
