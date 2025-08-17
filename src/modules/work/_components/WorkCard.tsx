import Image from "next/image";
import React from "react";

type WorkCardProps = {
  title: string;
  src: string;
};
const WorkCard = ({ title, src }: WorkCardProps) => {
  return (
    <div className="relative bg-white/10 rounded-lg overflow-hidden cursor-pointer">
      <Image
        src={src}
        alt="project"
        width={500}
        height={500}
        className="aspect-square object-cover"
      />
      <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent h-20 w-full flex">
        <h3 className="text-xl self-end">{title}</h3>
      </div>
    </div>
  );
};

export default WorkCard;
