import Image from "next/image";

const CardBog = () => {
  return (
    <div className="rounded-lg bg-white/10 backdrop-blur-lg group cursor-pointer p-3">
      <div className="rounded-lg overflow-hidden w-full h-60">
        <Image
          src={
            "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          alt="blog"
          width={500}
          height={500}
          className="object-cover rounded-lg group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500 will-change-transform"
        />
      </div>
      <div className="py-4">
        <h3 className="text-lg leading-relaxed">Lorem ipsum dolor sit amet.</h3>
        <p className="text-sm text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vel?</p>
      </div>
    </div>
  );
};

export default CardBog;
