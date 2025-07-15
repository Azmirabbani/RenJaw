"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (!userString) {
      router.push("/login");
      return;
    }

    try {
      const user = JSON.parse(userString);
      if (user.role !== "ADMIN") {
        router.push("/"); // hanya admin boleh masuk
      }
    } catch (error) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard Admin</h1>
      <p>Selamat datang, admin!</p>
    </div>
  );
}
