"use client";
import ProjectCardComponent from "./card";
import TitleComponent from "../Home/title";
import { PersonalProjects, SelectCompaniesProjects } from "./data";
import { Project } from "./type";

const ProjectsComponent = () => {


  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <TitleComponent
        eyebrow="Portfolio"
        title="All Projects"
        description="Architecture & Scalability"
      />

      <h2 className="text-2xl font-bold text-white mt-20 mb-8">
        Personal Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PersonalProjects.map((project) => (
          <ProjectCardComponent key={project.id} project={project as Project} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-8">
        Professional Experience
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SelectCompaniesProjects.map((project) => (
          <ProjectCardComponent key={project.id} project={project as Project} />
        ))}
      </div>
    </section>
  );
};
export default ProjectsComponent;
