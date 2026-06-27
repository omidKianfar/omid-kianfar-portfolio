"use client";

import { motion } from "framer-motion";
import TitleComponent from "./title";
import SkillBadgeComponent from "../skills";
import { skills } from "../skills/data";

const SkillsComponent = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <TitleComponent
        eyebrow="Expertise"
        title="Technical Arsenal"
        description="A specialized toolkit refined through 6 years of international project delivery, focusing on high-performance, scalable web solutions."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => (
          <motion.div
            key={group.title}
            variants={item}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-sky-400/50 hover:bg-white/[0.07]"
          >
            <h3 className="mb-4 text-lg font-bold text-white transition-colors group-hover:text-sky-400">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadgeComponent key={item}>{item}</SkillBadgeComponent>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsComponent;
