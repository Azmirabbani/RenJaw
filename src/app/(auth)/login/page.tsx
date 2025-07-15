<<<<<<< HEAD
"use client";

import { Lato, Racing_Sans_One } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: ["400"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
    } else {
      // Simpan info user ke localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect sesuai role
      if (data.user.role === "ADMIN") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <main className="flex h-screen">
      <div className={`${racing.className} p-10 flex flex-rows absolute top-10 text-2xl`}>
        <h1 className="text-black text-1xl">Renta</h1>
        <h1 className="text-[#D80032] text-1xl">.co</h1>
      </div>
      <div className="flex items-center p-10 w-1/2">
        <form className="z-50" onSubmit={handleSubmit}>
          <div className="bg-white shadow-lg p-10 w-[400px]">
            <h1 className={`${lato.className} text-3xl text-black font-bold mb-2 text-center`}>Welcome Back!</h1>
            <h2 className={`${lato.className} text-[#737373] mb-5 text-center`}>Login to your account to continue</h2>

            {error && <p className="text-red-500 mb-2 text-sm text-center">{error}</p>}

            <div className="relative">
              <div className="absolute top-3 left-0 inset-y-0 pl-3 flex item-center">
                <Image src="/email.svg" alt="icon" width={20} height={20} className="h-5 w-5"/>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 inset-y-0 pl-3 flex item-center">
                <Image src="/lock.svg" alt="icon" width={20} height={20} className="h-5 w-5"/>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>

            <button type="submit" className="mb-4 w-full py-2 bg-[#D80032] hover:bg-red-700 text-white cursor-pointer">Login</button>
            <p className="mb-2 text-center">Don't have an account?</p>
            <a href="/register" className="text-[#D80032] mx-32">Sign Up</a>
          </div>
        </form>
      </div>
      <div>
        <Image src="/background.png" alt="background" layout="fill" objectFit="contain" className="object-right" />
      </div>
      <div className="absolute top-10 bottom-0 right-0 z-10">
        <Image src="/toyota.png" alt="mobil" width={680} height={0} objectFit="contain" />
      </div>
    </main>
  );
=======
import LoginForm from "@/components/forms/LoginFrom";

export default function Login() {
  return <LoginForm />;
>>>>>>> afef0ebe191f3880e8b300154f0f7d7c21eb42f1
}
