type Project = {
  id: string;
  title: string;
  description: string;
  achievements: { title: string; description: string }[];
  nda?: string | null;
  liveUrl?: string | null;
  githubUrl?: string | null;
  category: "Personal" | "Company";
  myRole?: string;
  images?: string[] | null;
  techStack?: string[];
};

interface ProjectCardComponentProps {
  project: Project;
}

export type { Project, ProjectCardComponentProps };
