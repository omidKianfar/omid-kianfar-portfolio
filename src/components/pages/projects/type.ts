type Project = {
  id: string;
  title: string;
  description: string;
  achievements: { title: string; description: string }[];
  nda?: string;
  liveUrl?: { link: string } | null;
  githubUrl?: { link: string } | null;
  category: "Personal" | "Company";
  myRole?: string;
  images?: string[] | null;
  techStack?: string[];
};

interface ProjectCardComponentProps {
  project: Project;
}

export type { Project, ProjectCardComponentProps };
