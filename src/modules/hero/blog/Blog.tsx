import { motion } from "motion/react";
import CardBog from "./_components/CardBog";
import Header from "@/components/common/Header";

const Blog = () => {
  return (
    <section className="relative container py-14 md:py-20">
      <Header
        title="Insights & Updates"
        subTitle="Stay ahead with the latest trends and ideas in dynamic web development."
        className="md:w-1/2"
      />
      <div className="mt-5 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 justify-between">
          <CardBog />
          <CardBog />
          <CardBog />
        </div>
      </div>
      <div className="mx-auto text-center mt-14">
          <motion.button
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="border border-primary/80 w-full sm:w-auto text-sm md:text-base px-7 sm:px-8 md:px-12 py-3 rounded-full cursor-pointer"
          >
            View More
          </motion.button>
        </div>
    </section>
  );
};

export default Blog;
