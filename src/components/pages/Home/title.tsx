"use client";

import { motion } from "framer-motion";
import { TitleComponentProps } from "./type";

const TitleComponent = ({
  eyebrow,
  title,
  description,
}: TitleComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl text-center lg:text-left"
    >
      {eyebrow && (
        <p className="mb-4 text-base font-bold uppercase tracking-[0.25em] text-sky-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default TitleComponent;
