import { motion } from "motion/react";
import Badge from "@/components/common/Badge";
import WorkCard from "./_components/WorkCard";

const WORK_LIST = [
  {
    title: "Flou Cloud by Tekomsigma",
    src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Ticast by Telin",
    src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Telkominfra",
    src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const Work = () => {
  return (
    <section className="container py-14 md:py-20">
      {/* Header */}
      <div className="md:w-1/2 space-y-4 md:space-y-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 0.3 }}
        >
          <Badge className="px-4 !bg-white/10 mx-auto">
            <h2 className="text-xs sm:text-sm">Portfolio</h2>
          </Badge>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
          className="text-3xl md:text-5xl"
        >
          The work I do, <br /> and business I help.
        </motion.p>
      </div>
      {/* Projects */}
      <div className="mt-5 md:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {WORK_LIST.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeOut",
                duration: 0.8,
                delay: index * 0.2,
              }}
            >
              <WorkCard title={item.title} src={item.src} />
            </motion.div>
          ))}
        </div>
        <div className="mx-auto text-center mt-14">
          <motion.button
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="border border-primary/80 w-full sm:w-auto text-sm md:text-base px-7 sm:px-8 md:px-12 py-3 rounded-full cursor-pointer"
          >
            View More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Work;
