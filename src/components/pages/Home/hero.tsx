"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center py-16 text-center lg:flex-row lg:text-left lg:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl"
      >
        <motion.p
          variants={itemVariants}
          className="flex items-center justify-center text-sm font-semibold uppercase tracking-[0.3em] text-sky-400 lg:justify-start"
        >
          <span className="mr-2 hidden h-px w-8 bg-sky-400 lg:block"></span>
          Front-End Developer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mt-6 font-bold tracking-tight text-white text-3xl sm:text-4xl lg:text-6xl text-balance"
        >
          Crafting <span className="text-sky-400">high-performance</span> <br />
          digital experiences.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-slate-400 text-base sm:text-lg leading-7 sm:leading-8"
        >
          Senior Front-End Developer with 6 years of experience, specializing in
          building high-performance applications with Next.js and TypeScript.
          Proven track record of working remotely on complex, large-scale
          projects for international markets, including the U.S. and Europe.
          Expertise in owning end-to-end front-end architecture, with a strong
          focus on scalability, maintainability, and seamless third-party
          integrations. A highly reliable problem solver, recognized for
          resolving critical technical challenges in high-volume production
          environments and leading teams toward business-aligned success.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto rounded-xl bg-sky-400 px-8 py-4 font-semibold text-slate-950 transition-all hover:bg-sky-300 hover:scale-105"
          >
            View projects
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-sky-500/50 hover:text-sky-400 hover:scale-105"
          >
            Contact me
          </Link>

          <Link
            href="/pdf/Omid-Kianfar-Resume.pdf"
            download
            className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-sky-500/50 hover:text-sky-400 hover:scale-105"
          >
            Download Resume
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroComponent;
