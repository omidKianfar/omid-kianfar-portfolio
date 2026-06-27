"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TitleComponent from "../Home/title";
import { contacts } from "./data";

const ContactComponent = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <TitleComponent
        eyebrow="Contact"
        title="Let’s build something great"
        description="If you're looking for a front-end developer for a product team or a freelance project, feel free to reach out."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-sky-500/30 transition-colors"
      >
        {contacts.map((contact) => (
          <div key={contact.title} className="flex items-center gap-4">
            <span className="w-24 font-bold text-white">{contact.title}</span>

            <Link
              href={contact.href}
              target={contact.title === "Email" ? undefined : "_blank"}
              rel={
                contact.title === "Email" ? undefined : "noopener noreferrer"
              }
              className="text-sky-400 transition hover:text-sky-300 hover:scale-105"
            >
              {contact.caption}
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactComponent;
