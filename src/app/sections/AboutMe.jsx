"use client";
import React from "react";
import {FileText, Linkedin, Github} from "lucide-react";
import SectionHead from "../components/SectionHead";
import SectionContainer from "../components/SectionContainer";
import SectionBody, {SubHeading, Paragraph} from "../components/SectionBody";
import useIntersectionObserver from "../Utility/useIntersectionObserver";
import {GITHUB, LINKEDIN, RESUME} from "../Utility";

const aboutMeSection = {
  "Full Name": "Amrit Thapa",
  Phone: "+91-9886458098",
  email: "amritthapa966@gmail.com",
  Address: "Bengaluru - 560049",
};

const AboutMe = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [addresRef, isAddressVisible] = useIntersectionObserver();
  const [introRef, isIntroVisible] = useIntersectionObserver();

  return (
    <SectionContainer>
      <SectionHead
        refe={headerRef}
        className={isHeaderVisible ? "animate-slideIn" : ""}
      >
        About Me
      </SectionHead>
      <SectionBody>
        <div
          ref={addresRef}
          className={isAddressVisible ? "animate-slideIn" : ""}
        >
          {Object.keys(aboutMeSection).map((item, index) => {
            return (
              <div key={item} className="flex gap-3 pb-7">
                <div className="min-w-24">{item}:</div>
                <div className="text-[#00000080] min-w-44">
                  {aboutMeSection[item]}
                </div>
              </div>
            );
          })}
        </div>
        <div ref={introRef} className={isIntroVisible ? "animate-slideIn" : ""}>
          <SubHeading>Hello There!</SubHeading>
          <Paragraph>
            Senior Software Engineer with 4+ years of Experience, adept at
            creating web apps from scratch. Specialized in web app optimization,
            and delivering innovative solutions for real-world challenges. Ready
            to contribute expertise and drive success in software engineering
          </Paragraph>
          <div className="flex gap-3">
            <Github
              onClick={() => window.open(GITHUB, "_blank")}
              className="p-2 rounded cursor-pointer hover:shadow"
              size={40}
            />
            <Linkedin
              onClick={() => window.open(LINKEDIN, "_blank")}
              className="p-2 rounded cursor-pointer hover:shadow"
              size={40}
            />
            <FileText
              onClick={() => window.open(RESUME, "_blank")}
              className="p-2 rounded cursor-pointer hover:shadow"
              size={40}
            />
          </div>
        </div>
      </SectionBody>
    </SectionContainer>
  );
};

export default AboutMe;
