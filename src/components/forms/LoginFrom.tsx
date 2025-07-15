import { Lato, Racing_Sans_One } from "next/font/google";
import Image from "next/image";

const racing = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function LoginForm() {
  return (
    <main className="flex h-screen">
      <div className="flex flex-col">
        <div
          className={`${racing.className} p-10 flex flex-rows top-10 text-2xl`}
        >
          <h1 className="text-black text-1xl">Renta</h1>
          <h1 className="text-[#D80032] text-1xl">.co</h1>
        </div>
        {/*  */}
        <div className="flex items-center px-10 w-1/2">
          <form className="z-50">
            <div className="bg-white shadow-lg p-10 w-[400px]">
              <h1
                className={`${lato.className} text-3xl text-black font-bold mb-2 text-center`}
              >
                Welcome Back!
              </h1>
              <h2
                className={`${lato.className} text-[#737373] mb-5 text-center`}
              >
                Login to your account to continue
              </h2>
              <div className="relative">
                <div className="absolute top-3 left-0 inset-y-0 pl-3 flex item-center">
                  <Image
                    src="/email.svg"
                    alt="icon"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute top-3 left-0 inset-y-0 pl-3 flex item-center">
                  <Image
                    src="/lock.svg"
                    alt="icon"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-4 pl-10 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  className="mb-6 accent-[#D80032]"
                />
                <label className="mx-2 text-[#737373]">Remember Me</label>
              </div>
              <div>
                <button
                  type="submit"
                  className="mb-4 w-full py-2 bg-[#D80032] hover:bg-red-700 text-white cursor-pointer"
                >
                  Login
                </button>
                <p className="mb-2 text-center">Dont have an account?</p>
                <a href="/register" className="text-[#D80032] mx-32">
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="pointer-eve">
        <Image
          src="/background.png"
          alt="background"
          layout="fill"
          objectFit="contain"
          className="object-right"
        ></Image>
      </div>
      <div className="relative top-10 ml-[105px] z-10">
        <Image
          src="/toyota.png"
          alt="mobil"
          width={680}
          height={0}
          objectFit="contain"
        ></Image>
      </div>
    </main>
  );
}
