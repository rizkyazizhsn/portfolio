import Badge from "@/components/common/Badge";
import { SiTarget } from "react-icons/si";
import { motion } from "motion/react";
import VelocityText from "@/components/VelocityText";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-14 sm:py-40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {/* Left Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.4, delay: .3 }}
            >
              <Badge className="px-4 !bg-white/10">
                <span className="text-xs sm:text-sm">Who Am I</span>
              </Badge>
            </motion.div>
            <div className="mt-6 space-y-3">
              <motion.h2
                initial={{ opacity: 0, y: "20%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 0.7, delay: .3 }}
                className="text-3xl md:text-5xl"
              >
                About Me
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: "20%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 0.7, delay: .4 }}
                className="mt-5 text-base tracking-wide leading-relaxed text-white/80"
              >
                I specialize in transforming complex ideas into clean,
                interactive, and scalable web applications. My approach combines
                modern frontend technologies with user-focused design principles
                to build products that are both delightful and performant.{" "}
                <br />
                Ready to bring your next project to life?
              </motion.h3>
            </div>
          </div>
          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="bg-white rounded-lg p-5 flex flex-col items-center justify-between h-[28rem]"
          >
            <div className="flex items-center gap-x-5 h-full">
              {/* Experience */}
              <div className="text-slate-800 text-center">
                <motion.p
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
                  className="text-6xl md:text-7xl font-medium"
                >
                  5+
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
                  className="text-xl"
                >
                  Years of Experience
                </motion.p>
              </div>
              {/* Clients */}
              <div className="text-slate-800 text-center">
                <motion.p
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                  className="text-6xl md:text-7xl font-medium"
                >
                  10+
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
                  className="text-xl"
                >
                  Satisfied Clients.
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}
              className="rounded-lg w-full h-80 overflow-hidden"
            >
              <Image src="/img/about-1.jpg" width={500} height={320} alt="about" className="size-full object-cover" />
            </motion.div>
          </motion.div>
          {/* Right Content */}
          <div className="flex flex-col gap-y-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
              className="rounded-lg bg-white overflow-hidden w-full h-40 origin-left"
            >
              <Image src="/img/about-3.png" width={500} height={160} alt="about" className="size-full object-cover object-left" />
            </motion.div>
            <ul className="space-y-4">
              <li className="flex items-start gap-x-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.3, delay: 0.8 }}
                >
                  <SiTarget className="size-6 shrink-0" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                  className="leading-relaxed tracking-wide"
                >
                  With 5+ years of experience, I craft intuitive, responsive,
                  and high-performance web applications that deliver seamless
                  digital experiences.
                </motion.p>
              </li>
              <li className="flex items-start gap-x-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.3, delay: 0.8 }}
                >
                  <SiTarget className="size-6 shrink-0" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                  className="leading-relaxed tracking-wide"
                >
                  I thrive on collaborating with teams and clients, blending
                  technical expertise with creativity to turn visions into
                  impactful, real-world solutions.
                </motion.p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <VelocityText className="mt-32 opacity-70" baseVelocity={-2}>
        Frontend Developer
      </VelocityText>
      <VelocityText className="opacity-70" baseVelocity={1}>Crafting Web Experiences</VelocityText>
    </section>
  );
};

export default About;
