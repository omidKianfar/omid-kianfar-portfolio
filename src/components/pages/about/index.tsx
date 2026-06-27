"use client";

import { motion } from "framer-motion";
import TitleComponent from "../Home/title";

const AboutComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <TitleComponent
        eyebrow="About Me"
        title="Engineering digital experiences with precision and scale"
        description="I bridge the gap between complex business requirements and high-performance user interfaces."
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12 space-y-8 text-slate-300 leading-8"
      >
        <p>
          With 6 years of deep-dive experience in front-end architecture, I
          specialize in building scalable, maintainable, and
          performance-optimized web applications. Having spent 4 years working
          remotely with international markets, I have developed a sharp focus on
          cross-cultural collaboration, agile methodologies, and the ability to
          deliver enterprise-grade solutions that stand the test of time.
        </p>

        <p>
          My approach is rooted in the philosophy that great code is not just
          about functionality, but about long-term sustainability. I am deeply
          passionate about architecting robust component systems, ensuring
          seamless integration between front-end logic and backend services, and
          mentoring teammates to elevate the collective technical standard of
          the project.
        </p>

        <p>
          Whether it is optimizing complex React state management, implementing
          performance-driven GraphQL architectures, or ensuring a pixel-perfect
          design-to-code transition, I thrive in challenging environments where
          attention to detail and a commitment to clean, testable code are the
          cornerstones of success.
        </p>

        <p className="border-l-2 border-sky-400 pl-6 italic text-slate-400">
          "I don’t just write code; I engineer solutions that enable teams to
          scale and products to delight their users."
        </p>

        <div className="pt-8">
          <a
            href="/pdf/Omid-Kianfar-Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold transition group"
          >
            <span>Download Full Resume</span>

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="text-lg"
            >
              →
            </motion.span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutComponent;
