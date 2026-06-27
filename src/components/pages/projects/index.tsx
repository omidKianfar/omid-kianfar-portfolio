"use client";

import { Suspense } from "react";
import ProjectCardComponent from "./card";
import TitleComponent from "../Home/title";
import { PersonalProjects, SelectCompaniesProjects } from "./data";
import { Project } from "./type";

const Projectscard = ({ projects }: { projects: Project[] }) => (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <ProjectCardComponent key={project.id} project={project as Project} />
    ))}
  </div>
);

const ProjectsComponent = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <TitleComponent
        eyebrow="Portfolio"
        title="All Projects"
        description="Architecture & Scalability"
      />

      <h2 className="text-2xl font-bold text-white mt-20 mb-8">Personal Projects</h2>
      <Suspense fallback={<div className="h-64 w-full animate-pulse bg-white/5 rounded-2xl" />}>
        <Projectscard projects={PersonalProjects as Project[]} />
      </Suspense>

      <h2 className="text-2xl font-bold text-white mt-12 mb-8">Professional Experience</h2>
      <Suspense fallback={<div className="h-64 w-full animate-pulse bg-white/5 rounded-2xl" />}>
        <Projectscard projects={SelectCompaniesProjects as Project[]} />
      </Suspense>
    </section>
  );
};

export default ProjectsComponent;