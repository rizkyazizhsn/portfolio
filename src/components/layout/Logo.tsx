import { motion } from "motion/react";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", delay: 0.3 }}
        className="size-6 rounded-full bg-white"
      />
      <div className="flex items-center overflow-hidden">
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", delay: 0.3 }}
          className="text-white text-sm"
        >
          rizkyazizhsn
        </motion.span>
      </div>
    </div>
  );
};

export default Logo;
