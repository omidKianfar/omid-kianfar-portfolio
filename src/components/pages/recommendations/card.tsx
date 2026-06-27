"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RecommendationCardComponentProps } from "./type";

const RecommendationCardComponent = ({
  name,
  role,
  quote,
  linkedinUrl,
}: RecommendationCardComponentProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, borderColor: "rgba(56, 189, 248, 0.5)" }}
    className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-sky-500/10 "
  >
    <p className="leading-7 text-gray-300 italic mb-6 max-h-[300px] overflow-y-auto pr-2">{quote}</p>

    <div className="mt-auto pt-6 border-t border-white/10">
      <div className="flex flex-col">
        <h4 className="text-white font-bold">{name}</h4>

        <p className="text-xs text-sky-400">{role}</p>
      </div>

      <div className="mt-4">
        <Link
          href={linkedinUrl}
          target="_blank"
          className="cursor-pointer text-lg text-slate-400 hover:text-sky-400 transition  underline-offset-4"
        >
          View Profile →
        </Link>
      </div>
    </div>
  </motion.div>
);

export default RecommendationCardComponent;
