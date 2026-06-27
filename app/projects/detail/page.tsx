import { Suspense } from "react";
import PageLoading from "@/src/components/common/page-loading";
import ProjectDetailComponent from "@/src/components/pages/projects/detail";

const ProjectDetailpage = () => {
  return <Suspense fallback={<PageLoading/>}><ProjectDetailComponent /></Suspense>;
};

export default ProjectDetailpage;
