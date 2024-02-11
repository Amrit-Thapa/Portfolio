"use client";
import React from "react";
import Image from "next/image";
import SectionBody from "../components/SectionBody";
import SectionContainer from "../components/SectionContainer";
import SectionHead from "../components/SectionHead";
import TaskLogo from "../../../public/images/projects/task-tracker.png";
import useIntersectionObserver from "../Utility/useIntersectionObserver";
import classNames from "classnames";

const Projects = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [projectRef, isProjectVisible] = useIntersectionObserver();

  return (
    <SectionContainer>
      <SectionHead
        refe={headerRef}
        className={isHeaderVisible ? "animate-slideIn" : ""}
      >
        Projects
      </SectionHead>
      <SectionBody>
        <div
          ref={projectRef as React.LegacyRef<HTMLDivElement>}
          className={classNames("flex justify-center w-full", {
            "animate-slideIn": isProjectVisible,
          })}
        >
          <div className="pt-10 border rounded-lg shadow">
            <Image
              className="cursor-pointer"
              src={TaskLogo}
              alt="task=tracker"
              height={250}
              onClick={() =>
                window.open(
                  "https://task-manager-8wl0fne0i-amrit-thapas-projects.vercel.app",
                  "__blank",
                )
              }
            />
          </div>
        </div>
      </SectionBody>
    </SectionContainer>
  );
};

export default Projects;
