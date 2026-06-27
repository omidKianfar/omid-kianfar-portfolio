"use client";

import { lazy, Suspense } from "react";
import HeroComponent from "./hero";
import InformationComponent from "./information";
import LoadingCircle from "../../atom/loadings/loading-circle";

const ExperiencesComponent = lazy(() => import("./experiences"));
const SkillsComponent = lazy(() => import("./skills"));
const LandingProjectsComponent = lazy(() => import("./projects"));
const RecommendsComponent = lazy(() => import("./recommendations"));

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
