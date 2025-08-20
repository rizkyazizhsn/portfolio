import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container relative py-14 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.6 }}
        className="absolute block rounded-full bg-primary/90 size-56 sm:size-80 blur-[100px] sm:blur-[200px] -top-10 -left-10 sm:-top-28 sm:-left-28"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.7 }}
        className="absolute block rounded-full bg-primary size-56 sm:size-80 blur-[100px] sm:blur-[150px] bottom-0 -right-10 sm:bottom-52 sm:-right-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between md:gap-x-20">
        {/* Left Content */}
        <div className="flex flex-col gap-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center w-fit gap-x-2 sm:gap-x-3 rounded-full px-3 py-2 bg-white/10"
          >
            <div className="relative flex items-center justify-center size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </div>
            <span className="text-xs sm:text-sm">Available for work</span>
          </motion.div>
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-4xl md:text-6xl md:leading-16">
              <div className="flex items-center overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                  Your trusted partner&nbsp;
                </motion.span>
              </div>
              <div className="flex items-center overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  for building dynamic&nbsp;
                </motion.span>
              </div>
              <div className="flex items-center overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  web experiences
                </motion.span>
              </div>
            </h1>
            <motion.p
              initial={{ y: "50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base md:text-lg"
            >
              Frontend Developer With 5+ years of frontend expertise, <br /> I craft clean, performant,
              and delightful experiences powered by modern technologies.
            </motion.p>
          </div>
          {/* Button */}
          <div className="flex items-center gap-x-3 mt-5">
            <motion.button
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
              className="bg-primary w-full sm:w-auto text-sm px-7 sm:px-8 md:px-12 py-3 rounded-full cursor-pointer"
            >
              Let’s talk
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="border border-primary/80 w-full sm:w-auto text-sm px-7 sm:px-8 md:px-12 py-3 rounded-full cursor-pointer"
            >
              Download CV
            </motion.button>
          </div>
        </div>
        {/* Right Content */}
        <div className="hidden sm:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative h-80 w-56 md:h-[550px] md:w-[400px] bg-primary rounded-lg overflow-hidden"
          >
            <motion.div initial={{ y: "5%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="size-full">
              <Image src="/img/portfolio-3.1.png" alt="hero" width={500} height={550} className="size-full object-contain absolute bottom-0" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
