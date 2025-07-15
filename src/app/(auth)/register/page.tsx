"use client";

import { Lato, Racing_Sans_One } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const racing = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Password does not match");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Registration failed");
    } else {
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => router.push("/login"), 2000);
    }
  };

  return (
    <main className="flex">
      <div
        className={`${racing.className} p-5 mx-5 flex flex-rows absolute top-10 text-2xl`}
      >
        <h1 className="text-black text-1xl">Renta</h1>
        <h1 className="text-[#D80032] text-1xl">.co</h1>
      </div>

      <div className="flex">
        <form className="z-50" onSubmit={handleSubmit}>
          <div className="bg-white shadow-lg p-10 w-[400px] mx-10 mt-28">
            <h1 className={`${lato.className} text-2xl text-black font-bold mb-2 text-center`}>Create an Account</h1>
            <h2 className={`${lato.className} text-[#737373] mb-5 text-center`}>It's fast and easy to start renting a car</h2>

            {error && <p className="text-red-500 mb-2 text-sm text-center">{error}</p>}
            {success && <p className="text-green-600 mb-2 text-sm text-center">{success}</p>}

            {/* Name */}
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image src="/user.svg" alt="icon" width={20} height={20} className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image src="/email.svg" alt="icon" width={20} height={20} className="h-5 w-5" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image src="/phone.svg" alt="icon" width={20} height={20} className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image src="/lock.svg" alt="icon" width={20} height={20} className="h-5 w-5" />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <div className="absolute top-3 inset-y-0 left-0 pl-3 flex item-center">
                <Image src="/lock.svg" alt="icon" width={20} height={20} className="h-5 w-5" />
              </div>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
              />
            </div>

            <div>
              <button type="submit" className="mb-4 w-full py-2 bg-[#D80032] hover:bg-red-700 text-white cursor-pointer">
                Sign Up
              </button>
              <p className="mb-2 text-center">Already have an account?</p>
              <a href="/login" className="text-[#D80032] mx-35">Login</a>
            </div>
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
}
