"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // تغییر مهم
import { RecommendationCardComponentProps } from "./type";

const RecommendationCardComponent = ({
  name,
  role,
  quote,
  linkedinUrl,
}: RecommendationCardComponentProps) => {
  const pathname = usePathname(); // جایگزین useRouter
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_CHARS = 200;
  const shouldTruncate = quote.length > MAX_CHARS;

  const displayQuote = isExpanded ? quote : quote.slice(0, MAX_CHARS) + "...";

  const isRecommendationsPage = pathname === "/recommendations";

  return (
    <motion.div
      layout 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, borderColor: "rgba(56, 189, 248, 0.5)" }}
      className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-sky-500/10 cursor-default"
    >
      <div className="text-gray-300 italic mb-6">
        {isRecommendationsPage ? (
          <div>{quote}</div>
        ) : (
          <div className="flex flex-col justify-start items-start">
            {displayQuote}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sky-400 font-semibold text-sm "
              >
                {isExpanded ? "Less" : "More"}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="flex flex-col">
          <h4 className="text-white font-bold">{name}</h4>
          <p className="text-xs text-sky-400">{role}</p>
        </div>

        <div className="mt-4">
          <Link
            href={linkedinUrl}
            target="_blank"
            className="inline-block text-lg text-slate-400 hover:text-sky-400 transition"
          >
            View Profile →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RecommendationCardComponent;