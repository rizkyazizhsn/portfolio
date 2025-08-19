import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="py-14 md:py-28 flex flex-col items-center justify-center">
      <div className="space-y-3 md:space-y-6 text-center md:w-3/4">
        <motion.h2
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
          className="text-4xl md:text-7xl font-medium"
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeOut", duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-lg"
        >
          Let’s build something great together! Whether you have a project in
          mind, an opportunity to discuss, <br /> or just want to say hi — I’d
          love to hear from you.
        </motion.p>
      </div>
      <motion.button
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="mt-10 bg-primary sm:w-auto text-sm md:text-base px-7 sm:px-8 md:px-12 py-3 rounded-full cursor-pointer"
      >
        Contact Now
      </motion.button>
    </div>
  );
};

export default Contact;
