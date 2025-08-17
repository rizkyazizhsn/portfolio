import { CLIENTS_LIST } from "@/constants/clients-constant";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const Marquee = ({ reverse }: { reverse?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const clients = CLIENTS_LIST;

  // Hitung lebar total untuk satu set item
  // Setiap item: width 240px (size-60) + margin 32px (mx-4) = 272px
  const itemWidth = 272; // 240px + 32px margin
  const totalWidth = clients.length * itemWidth;

  return (
    <div className="relative flex items-center overflow-hidden">
      <motion.div
        ref={containerRef}
        animate={{ x: reverse ? totalWidth : -totalWidth }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
        className="flex flex-nowrap shrink-0"
        style={{ width: `${totalWidth * 2}px` }}
      >
        {/* Set pertama */}
        {clients.map((src, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center justify-center rounded-lg bg-[#5a89fd0d] border border-[#ffffff1a] p-5 size-60 mx-4 shrink-0 backdrop-blur-sm"
          >
            <Image
              src={src}
              alt="client"
              width={120}
              height={120}
              className="w-32 h-20 object-contain"
            />
          </div>
        ))}
        {/* Set kedua (duplikat) */}
        {clients.map((src, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center justify-center rounded-lg bg-[#5a89fd0d] border border-[#ffffff1a] p-5 size-60 mx-4 shrink-0 backdrop-blur-sm"
          >
            <Image
              src={src}
              alt="client"
              width={120}
              height={120}
              className="w-32 h-20 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
