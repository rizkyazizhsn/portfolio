import { motion } from "motion/react";
import Badge from "@/components/common/Badge";
import Marquee from "@/components/Marquee";

const Client = () => {
  return (
    <section className="relative py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.6 }}
        className="absolute block rounded-full bg-primary/80 size-56 sm:size-80 blur-3xl sm:blur-[150px] left-1/4 top-1/5 -z-10"
      />
      {/* Header */}
      <div className="space-y-4 md:space-y-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 0.3 }}
        >
          <Badge className="px-4 !bg-white/10 mx-auto">
            <span className="text-xs sm:text-sm">
              Great companies experiences
            </span>
          </Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
          className="text-3xl md:text-5xl"
        >
          Clients I&apos;ve Collaborated With
        </motion.h2>
      </div>
      {/* Clients */}
      <div className="mt-5 md:mt-10">
        <Marquee />
      </div>
    </section>
  );
};

export default Client;