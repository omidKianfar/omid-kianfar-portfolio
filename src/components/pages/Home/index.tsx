import { Suspense } from "react";
import HeroComponent from "./hero";
import InformationComponent from "./information";
import dynamic from "next/dynamic";
import LoadingCircle from "../../atom/loadings/loading-circle";

const ExperiencesComponent = dynamic(() => import("./experiences"));
const SkillsComponent = dynamic(() => import("./skills"));
const LandingProjectsComponent = dynamic(() => import("./projects"));
const RecommendsComponent = dynamic(() => import("./recommendations"));

const HomeComponent = () => {
  return (
    <div>
      <HeroComponent />
      <InformationComponent />

      <Suspense
        fallback={
          <div className="flex h-64 items-center justify-center">
            <LoadingCircle size={40} />
          </div>
        }
      >
        <ExperiencesComponent />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex h-64 items-center justify-center">
            <LoadingCircle size={40} />
          </div>
        }
      >
        <SkillsComponent />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex h-64 items-center justify-center">
            <LoadingCircle size={40} />
          </div>
        }
      >
        <LandingProjectsComponent />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex h-64 items-center justify-center">
            <LoadingCircle size={40} />
          </div>
        }
      >
        <RecommendsComponent />
      </Suspense>
    </div>
  );
};

export default HomeComponent;
