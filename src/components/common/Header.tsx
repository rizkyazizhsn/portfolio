import Badge from "./Badge";
import React from "react";
import { motion } from "motion/react";
import clsx from "clsx";

const Header = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  subTitle: string;
  className?: string;
}) => {
  return (
    <>
      {/* Header */}
      <div className={clsx("space-y-4 md:space-y-6", className)}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 0.3 }}
          className="w-fit"
        >
          <Badge className="px-4 !bg-white/10">
            <h2 className="text-xs sm:text-sm">
              {title}
            </h2>
          </Badge>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
          className="text-3xl md:text-5xl"
        >
          {subTitle}
        </motion.p>
      </div>
    </>
  );
};

export default Header;
