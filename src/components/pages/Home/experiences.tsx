"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TitleComponent from "./title";
import { ExperiencesData } from "./data";
import { experienceType, experienceWhatDo } from "./type";

const ExperiencesComponent = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <TitleComponent
        eyebrow="Experience"
        title="Professional Career Path"
        description="My roles and contributions in global remote environments."
      />

      <div className="mt-12 space-y-16 border-l border-white/10 pl-8">
        {ExperiencesData.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience as experienceType} />
        ))}
      </div>
    </section>
  );
};

const ExperienceItem = ({ experience }: { experience: experienceType }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? experience?.techStack : experience?.techStack?.slice(0, 15);
  const hasMore = experience?.techStack?.length! > 15;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -left-[40px] top-1.5 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>

      <h3 className="text-xl font-bold text-white">{experience.title}</h3>

      <div className="flex flex-wrap items-center gap-2 mt-1 mb-4">
        <span className="text-sky-400 font-medium">{experience.company}</span>
        <span className="text-slate-400 text-sm">| {experience.HowWork}</span>
      </div>

      <div className="space-y-4 mb-6">
        {experience?.WhatDo?.map((item: experienceWhatDo) => (
          <div key={item.id} className="text-slate-100 text-sm leading-relaxed">
            <strong className="text-orange-400/90 block mb-1">
              {item.title}
            </strong>
            <p className="text-slate-300">{item.desdription}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {visibleItems?.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 text-[10px] uppercase tracking-wider rounded bg-white/5 border border-white/10 text-blue-200 font-semibold"
          >
            {tech}
          </span>
        ))}

        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={` text-[14px] capitalize flex justify-center items-center  rounded ${showAll ? " text-orange-400 hover:text-orange-300" : "text-blue-400 hover:text-blue-300"} font-semibold  cursor-pointer`}
          >
            {showAll ? "Less" : "More"}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ExperiencesComponent;
