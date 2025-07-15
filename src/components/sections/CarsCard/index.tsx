import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

interface ProductCardProps {
  name: string;
  price: number;
  location: string;
  image: string;
}

const CarsCard: React.FC<ProductCardProps> = ({
  name,
  price,
  location,
  image,
}) => {
  return (
    <div className="w-full max-w-[420px] rounded-xl p-8">
      {/* WRAPPER bergaya rasio tetap */}
      <div className="relative w-full h-56 sm:h-64">
        {/* fill ⇒ memenuhi wrapper; object-contain ⇒ tidak terpotong */}
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, 420px"
          priority
        />
      </div>

      {/* ---- konten teks ---- */}
      <div className="mt-6 space-y-3">
        <h2 className="text-2xl font-medium text-[#737373] text-left">
          {name}
        </h2>

        {/* —— baris harga + /Day + lokasi —— */}
        <div className="flex items-baseline justify-between mt-4">
          {/* kiri: harga + /Day */}
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-[#404040]">${price}</span>
            <span className="text-sm font-bold text-[#A6A6A6]">/Day</span>
          </div>

          {/* kanan: ikon peta + lokasi */}
          <div className="flex items-center gap-1 text-[#A6A6A6]">
            <FaMapMarkerAlt className="text-[#D80032] w-5 h-5" />
            <span className="font-bold">{location}</span>
          </div>
        </div>
      </div>
      {/* Tombol Rent Now */}
      <button
        className="
    relative w-full py-3 mt-6
    bg-white text-[#D80032]           /* warna normal */
    border border-[#D80032]
    hover:bg-[#D80032] hover:text-white  /* warna saat hover */
    transition-colors                 /* transisi halus */
    select-none
    cursor-pointer
  "
      >
        {/* ikon di pojok kiri – warnanya ikut teks parent */}
        <LuPhone
          className="
      absolute left-4 top-1/2 -translate-y-1/2
      w-5 h-5 text-current            /* inherit color ⇒ ikut berubah saat hover */
    "
        />

        {/* teks di tengah */}
        <span className="block w-full text-center font-semibold">Rent Now</span>
      </button>
    </div>
  );
};

export default CarsCard;
