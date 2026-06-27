"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TitleComponent from "./title";
import ProjectCardComponent from "../projects/card";
import { PersonalProjects, SelectCompaniesProjects } from "../projects/data";
import { Project } from "../projects/type";

const LandingProjectsComponent = () => {
  const allProjects = [
    ...PersonalProjects.map((project) => ({ ...project })),
    ...SelectCompaniesProjects.map((project) => ({
      ...project,
    })),
  ];

  const DisplayProjects = allProjects.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <TitleComponent
        eyebrow="Portfolio"
        title="Featured Work"
        description="Selected projects demonstrating architecture."
      />
      <motion.div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DisplayProjects.map((project) => (
          <ProjectCardComponent key={project.id} project={project as Project} />
        ))}
      </motion.div>

      <div className="mt-12 text-center lg:text-left text-lg">
        <Link
          href="/projects"
          className="text-sky-400 font-semibold hover:text-sky-300"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
};
export default LandingProjectsComponent;
