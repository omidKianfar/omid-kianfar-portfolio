"use client";

import { motion } from "framer-motion";
import { information } from "./data";

const InformationComponent = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {information?.map((info, index) => (
            <motion.div
              key={info.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-sky-400">
                {info.quantity}
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-white">
                {info.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationComponent;
