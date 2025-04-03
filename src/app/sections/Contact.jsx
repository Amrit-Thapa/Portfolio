"use client";
import React from "react";
import {Download, Linkedin, Mail} from "lucide-react";
import SectionBody from "../components/SectionBody";
import SectionContainer from "../components/SectionContainer";
import SectionHead from "../components/SectionHead";
import useIntersectionObserver from "../Utility/useIntersectionObserver";
import classNames from "classnames";
import {LINKEDIN, RESUME} from "../Utility";
const aboutMeSection = {
  Name: "Amrit Thapa",
  Phone: "+91-9886458098",
};
const Contact = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [introRef, isIntroVisible] = useIntersectionObserver();
  return (
    <SectionContainer>
      <SectionHead
        refe={headerRef}
        className={isHeaderVisible ? "animate-slideIn" : ""}
      >
        Hire Me!
      </SectionHead>
      <SectionBody>
        <div
          className={classNames("flex justify-center w-full text-2xl", {
            "animate-slideIn": isIntroVisible,
          })}
          ref={introRef}
        >
          <div>
            {Object.keys(aboutMeSection).map((item) => {
              return (
                <div key={item} className="flex justify-center pb-7">
                  <div className="min-w-24">{item}:</div>
                  <div className="text-[#00000080]">{aboutMeSection[item]}</div>
                </div>
              );
            })}
            <div className="flex gap-4 text-center">
              <a href={RESUME} target="_blank">
                <button className="px-4 py-1 text-center transition border-2 rounded-lg hover:scale-110">
                  <Download />
                  Resume
                </button>
              </a>
              <a href="mailto:amritthapa966@gmail.com">
                <button className="px-4 py-1 text-center transition border-2 rounded-lg hover:scale-110">
                  <Mail />
                  E-Mail
                </button>
              </a>
              <a href={LINKEDIN} target="_blank">
                <button className="px-4 py-1 text-center transition border-2 rounded-lg hover:scale-110">
                  <Linkedin />
                  Linked
                </button>
              </a>
            </div>
          </div>
        </div>
      </SectionBody>
    </SectionContainer>
  );
};

export default Contact;
