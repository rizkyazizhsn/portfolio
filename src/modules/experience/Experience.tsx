import Badge from "@/components/common/Badge";
import { EXPERIENCE_LIST } from "@/constants/experience-constant";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <section className="container py-14 md:py-40">
      <div className="md:w-1/2 space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 0.3 }}
        >
          <Badge className="px-4 !bg-white/10">
            <h2 className="text-xs sm:text-sm">Experiences</h2>
          </Badge>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
          className="text-3xl md:text-5xl"
        >
          Proven Track Record in Building Modern Web Applications
        </motion.p>
      </div>
      {/* Experiences list */}
      <div className="mt-5 md:mt-14">
        {EXPERIENCE_LIST.map((item, index) => (
          <motion.div
            key={`item-${index}`}
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.8,
              delay: index * 0.2,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 justify-between border-b border-white/10 py-10"
          >
            <div className="md:space-y-3">
              <h3 className="text-lg md:text-2xl leading-tight">
                {item.title}
              </h3>
              <p className="md:text-base opacity-70">{item.date}</p>
            </div>
            <div className="md:space-y-3">
              <h4 className="text-lg md:text-2xl leading-tight">
                {item.company}
              </h4>
              <p className="md:text-base opacity-70">{item.location}</p>
            </div>
            <div className="flex items-center flex-wrap md:justify-end gap-2">
              {item.tools.map((tool, indexTool) => (
                <Badge key={`tool-${indexTool}`} className="px-4 !bg-white/10">
                  <span className="text-xs sm:text-sm">{tool}</span>
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
