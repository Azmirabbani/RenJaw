"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Lato, Racing_Sans_One } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const racing = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (err) {
        console.error("Invalid user session", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <nav className="relative z-50 flex items-center justify-between px-5 py-2 bg-white">
      {/* Logo */}
      <div className={`${racing.className} p-4 flex items-center text-2xl`}>
        <h1 className="text-black text-1xl">Renta</h1>
        <h1 className="text-[#D80032] text-1xl">.co</h1>
      </div>

<<<<<<< HEAD:src/app/navbar.tsx
      {/* Menu Tengah */}
      <ul className={`${lato.className} absolute left-1/2 -translate-x-1/2 flex space-x-1`}>
=======
      {/* Tengah: menu */}
      <ul
        className={`${lato.className} absolute left-1/2 -translate-x-1/2 flex space-x-1`}
      >
>>>>>>> afef0ebe191f3880e8b300154f0f7d7c21eb42f1:src/components/layout/navbar.tsx
        <Link href="/">
          <li className={`mr-6 ${pathname === "/" ? "text-[#D80032]" : "text-black"} cursor-pointer`}>
            Home
          </li>
        </Link>
<<<<<<< HEAD:src/app/navbar.tsx

        <Link href="/about">
          <li className={`mr-6 ${pathname === "/about" ? "text-[#D80032]" : "text-black"} cursor-pointer`}>
=======
        <Link href="/cars">
          <li
            className={`mr-6 ${
              pathname === "/cars" ? "text-[#D80032]" : "text-black"
            } cursor-pointer`}
          >
>>>>>>> afef0ebe191f3880e8b300154f0f7d7c21eb42f1:src/components/layout/navbar.tsx
            View Car
          </li>
        </Link>

        <Link href="/about/profile">
          <li className={`mr-6 ${pathname === "/about/profile" ? "text-[#D80032]" : "text-black"} cursor-pointer`}>
            Order
          </li>
        </Link>

        {/* 👇 Kalau role admin, bisa munculkan link admin dashboard */}
        {user?.role === "ADMIN" && (
          <Link href="/admin">
            <li className={`mr-6 ${pathname === "/admin" ? "text-[#D80032]" : "text-black"} cursor-pointer`}>
              Admin Dashboard
            </li>
          </Link>
        )}
      </ul>

      {/* Kanan: Login / Logout */}
      <div className={`${lato.className} flex right mr-5 gap-3`}>
        {user ? (
          <div className="flex items-center">
            <span className="text-black mr-3">Hi, {user.name}</span>
            <button
              className="bg-white rounded-md px-2 text-black text-sm h-7 cursor-pointer border"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <button
              className="bg-white border border-[#D80032] px-4 text-red-600 text-sm h-7 cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-[#D80032] border border-[#D80032] px-2 text-white text-sm h-7 cursor-pointer"
              onClick={handleRegister}
            >
              SignUp
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
