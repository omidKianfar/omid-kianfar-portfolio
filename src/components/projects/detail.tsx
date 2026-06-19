"use client";
import { notFound, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { PersonalProjects, SelectCompaniesProjects } from "./data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectDetailComponent = () => {
  const params = useSearchParams();
  const projectId = params.get("projectId");
  const allProjects = [...PersonalProjects, ...SelectCompaniesProjects];
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) return notFound();

  const images = (project as any).images || [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <Link
        href="/projects"
        className="text-sky-400 hover:text-sky-300 transition-colors"
      >
        ← Back to Projects
      </Link>

      <header className="mt-8 mb-12">
        <h1 className="text-3xl md:text-3xl font-bold tracking-tight text-white">
          {project.title}
        </h1>

        <div className="mt-4 flex items-center gap-3">
          <span
            className={`px-2 py-1 text-[10px] rounded-full font-bold uppercase ${project.category === "Company" ? "bg-sky-500/20 text-sky-300" : "bg-emerald-500/20 text-emerald-300"}`}
          >
            {(project as any).category || "Project"}
          </span>
        </div>
      </header>

      {(project as any).nda && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="my-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm italic"
        >
          {(project as any).nda}
        </motion.div>
      )}

      {images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="h-64 md:h-96"
          >
            {images.map((img: string, i: number) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt="project-slide"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}

      <div className="mb-8">
        <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-2">
          Overview
        </h3>

        <p className="text-slate-300 leading-7">{project.description}</p>
      </div>

      <div>
        <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-2">
          My Role
        </h3>

        <p className="text-sky-400 font-medium">
          {(project as any).myRole || "Lead Developer"}
        </p>
      </div>

      {/* بقیه محتوا (Achievements) */}
      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold">Engineering Achievements</h2>

        {project.achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
          >
            <h4 className="text-sky-400 font-semibold">{item.title}</h4>

            <p className="text-slate-400 text-sm mt-2 leading-7">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-bold mb-4">Tech Stack</h3>

        <div className="flex flex-wrap gap-2">
          {(project as any).techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-sky-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailComponent;
