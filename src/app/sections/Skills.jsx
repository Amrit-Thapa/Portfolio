"use client";
import React from "react";
import Image from "next/image";
import SectionContainer from "../components/SectionContainer";
import SectionHead from "../components/SectionHead";
import SectionBody from "../components/SectionBody";
import reactLogo from "../../../public/images/react.png";
import jsLogo from "../../../public/images/javascript.png";
import reduxLogo from "../../../public/images/redux.png";
import typescriptLogo from "../../../public/images/typescript.png";
import tailwindLogo from "../../../public/images/tailwindcss.png";
import htmlLogo from "../../../public/images/html5.png";
import css3Logo from "../../../public/images/css.png";
import nextjsLogo from "../../../public/images/nextjs.png";
import nodejsLogo from "../../../public/images/nodejs.png";
import sassLogo from "../../../public/images/sass.png";
import gitLogo from "../../../public/images/github.png";
import useIntersectionObserver from "../Utility/useIntersectionObserver";
import classNames from "classnames";

const SkillIconContainer = ({children}) => {
  return (
    <div className="p-2 rounded-lg cursor-pointer hover:shadow">{children}</div>
  );
};

const Skills = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [skillRef, isSkillVisible] = useIntersectionObserver();

  return (
    <SectionContainer>
      <SectionHead
        refe={headerRef}
        className={isHeaderVisible ? "animate-slideIn" : ""}
      >
        Skills
      </SectionHead>
      <SectionBody>
        <div
          className={classNames(
            "flex flex-wrap justify-center w-full text-center md:gap-20",
            {"animate-slideIn": isSkillVisible},
          )}
          ref={skillRef}
        >
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={typescriptLogo} alt="typescript" /> TypeScript
          </SkillIconContainer>
          <SkillIconContainer>
            <Image src={reactLogo} alt="react" /> React
          </SkillIconContainer>
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={nextjsLogo} alt="tailwindLogo" /> Next.js
          </SkillIconContainer>
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={reduxLogo} alt="redux" /> Redux
          </SkillIconContainer>
          <SkillIconContainer>
            <Image src={jsLogo} alt="js" /> JavaScript
          </SkillIconContainer>
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={tailwindLogo} alt="tailwindLogo" /> Tailwind
          </SkillIconContainer>
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={htmlLogo} alt="htmlLogo" /> HTML5
          </SkillIconContainer>
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={css3Logo} alt="css3Logo" />
            Css3
          </SkillIconContainer>
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={nodejsLogo} alt="tailwindLogo" />
            Node
          </SkillIconContainer>
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={sassLogo} alt="tailwindLogo" />
            Saas
          </SkillIconContainer>
          <SkillIconContainer className="p-2 cursor-pointer hover:shadow">
            <Image src={gitLogo} alt="tailwindLogo" /> Github
          </SkillIconContainer>
        </div>
      </SectionBody>
    </SectionContainer>
  );
};

export default Skills;
