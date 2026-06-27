"use client";

import { motion } from "framer-motion";
import RecommendationCardComponent from "./card";
import TitleComponent from "../Home/title";
import { recommendations } from "./data";

const RecommendationsComponent = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <TitleComponent
          eyebrow="Testimonials"
          title="Recommendations"
          description="Feedback from colleagues."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-12 space-y-6"
        >
          {recommendations.map((recommend) => (
            <motion.div
              key={recommend.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <RecommendationCardComponent
                name={recommend.name}
                role={recommend.role}
                quote={recommend.quote}
                linkedinUrl={recommend.linkedinUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 p-8   text-center"
        >
          <a
            href="https://www.linkedin.com/in/kianfar-omid1990/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full font-semibold text-sm transition-all hover:scale-105"
          >
            Check Recommendations
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RecommendationsComponent;
