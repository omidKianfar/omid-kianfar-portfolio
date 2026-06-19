"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ProjectCardComponentProps } from "./type";

const ProjectCardComponent = ({ project }: ProjectCardComponentProps) => {
  const router = useRouter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onClick={() => router.push(`/projects/detail?projectId=${project.id}`)}
      className="relative cursor-pointer group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-sky-400/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-sky-500/10"
    >
      <div className="absolute top-4 right-4">
        <span
          className={`px-2 py-1 text-[10px] rounded-full font-bold uppercase ${project.category === "Company" ? "bg-sky-500/20 text-sky-300" : "bg-emerald-500/20 text-emerald-300"}`}
        >
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 mt-4">
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-400">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-slate-400 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project?.techStack?.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-sky-400/10 bg-sky-400/5 px-2 py-1 text-[10px] uppercase text-sky-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
export default ProjectCardComponent;
