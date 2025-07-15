"use client";

import "./globals.css";
import { Lato } from "next/font/google";
import Navbar from "./navbar";
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
