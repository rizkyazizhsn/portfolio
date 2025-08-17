import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="container relative py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.6 }}
        className="absolute block rounded-full bg-primary/80 size-56 sm:size sm:size-80 blur-[100px] sm:blur-[200px] -top-10 -left-10 sm:-top-28 sm:-left-28"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.7 }}
        className="absolute block rounded-full bg-primary/80 size-56 sm:size-80 blur-[100px] sm:blur-[200px] bottom-0 -right-10 sm:top-36 sm:-right-14"
      />
      <div className="flex flex-col sm:flex-row items-center justify-between md:gap-x-20">
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
            <div className="text-5xl sm:text-4xl md:text-6xl md:leading-16">
              <h1 className="flex items-center overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                  Your trusted partner
                </motion.span>
              </h1>
              <h1 className="flex items-center overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  for building dynamic
                </motion.span>
              </h1>
              <h1 className="flex items-center overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  web experiences
                </motion.span>
              </h1>
            </div>
            <motion.p
              initial={{ y: "50%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base md:text-lg sm:w-3/4"
            >
              With 5+ years of frontend expertise, I craft clean, performant,
              and delightful experiences powered by modern technologies.
            </motion.p>
          </div>
          {/* Button */}
          <div className="flex items-center gap-x-3 mt-5">
            <motion.button
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
              className="bg-primary w-full sm:w-auto text-sm md:text-base px-7 sm:px-8 md:px-12 py-3 rounded-full cursor-pointer"
            >
              Let’s talk
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="border border-primary/80 w-full sm:w-auto text-sm md:text-base px-7 sm:px-8 md:px-12 py-3 rounded-full cursor-pointer"
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
            className="h-80 w-56 md:h-[550px] md:w-[400px] bg-primary animate-pulse rounded-lg"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
