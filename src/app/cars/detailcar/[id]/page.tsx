import { Lato } from "next/font/google";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function detailcar() {
  return (
    <main>
      <div className="flex flex-row px-15 py-10">
        <form>
          <div className="realtive w-1/2 bg-[#F2F2F2] p-10 w-[610px] h-[390px]">
            <div className="relative w-1/2 top-[30%] inset-x-0 left-65 transform -translate-x-1/2 flex item-center">
              <Image
                src="/mercedes.svg"
                alt="icon"
                width={700}
                height={200}
                className="object-contain scale-195"
              />
            </div>
          </div>
        </form>
        <div className="px-10">
          <h1 className={`${lato.className} text-5xl font-medium mb-6`}>
            Mercedes Benz
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <FaMapMarkerAlt className="text-[#D80032] h-6 w-5 mb-2" />
                <p
                  className={`${lato.className} text-xl text-[#737373] mx-2 mb-6`}
                >
                  Bandung
                </p>
              </div>
              <div className="flex flex-col">
                <div>
                  <div className="flex flex-row items-baseline">
                    <p
                      className={`${lato.className} text-4xl font-bold text-black mb-9`}
                    >
                      $132
                    </p>
                    <p className={`${lato.className} text-1xl text-[#737373]`}>
                      /Day
                    </p>
                  </div>
                </div>
                <p
                  className={`${lato.className} text-3xl font-medium text-black mb-4`}
                >
                  Time
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row w-50 mr-5 mb-6">
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                className="mb-4 p-5 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none cursor-pointer"
              />
            </div>
            <div className="felx flex-row w-50 ">
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                className="mb-4 p-5 w-full py-2 border border-[#DFDFDF] text-[#737373] focus:outline-none cursor-pointer"
              />
            </div>
          </div>
          <div>
            <div className="flex">
              <button className="flex items-center bg-[#D80032] text-white font-medium py-4 px-7 w-105 cursor-pointer">
                <LuPhone className="text-white h-5 w-5 mr-33" /> Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col px-15">
          <h1 className={`${lato.className} text-2xl font-medium`}>Overview</h1>
          <p className={`${lato.className} w-1/2 text-[#737373] text-justify`}>
            Mercedes Benz adalah pilihan tepat bagi yang mengutamakan
            kenyamanan, kemewahan, dan performa. Dengan interior premium, fitur
            keselamatan canggih, serta desain elegan, mobil ini ideal untuk
            perjalanan bisnis atau liburan di Bandung. Ditenagai mesin bertenaga
            dan transmisi otomatis, memberikan pengalaman berkendara yang mulus
            dan menyenangkan.
          </p>
        </div>
      </div>
    </main>
  );
}
