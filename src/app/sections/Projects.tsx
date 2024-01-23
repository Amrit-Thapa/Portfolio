"use client";
import React from "react";
import Image from "next/image";
import SectionBody from "../components/SectionBody";
import SectionContainer from "../components/SectionContainer";
import SectionHead from "../components/SectionHead";
import TaskLogo from "../../../public/images/projects/task-tracker.png";

const Projects = () => {
  return (
    <SectionContainer>
      <SectionHead>Projects</SectionHead>
      <SectionBody>
        <div className="flex justify-center w-full">
          <div className="border rounded-lg shadow">
            <Image
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
