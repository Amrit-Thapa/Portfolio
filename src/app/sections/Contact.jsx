"use client";
import React from "react";
import {Download, Linkedin, Mail} from "lucide-react";
import SectionBody from "../components/SectionBody";
import SectionContainer from "../components/SectionContainer";
import SectionHead from "../components/SectionHead";
const aboutMeSection = {
  Name: "Amrit Thapa",
  Phone: "+91-9886458098",
};
const Contact = () => {
  return (
    <SectionContainer>
      <SectionHead>Hire Me!</SectionHead>
      <SectionBody>
        <div className="flex justify-center w-full text-2xl">
          <div>
            {Object.keys(aboutMeSection).map((item) => {
              return (
                <div key={item} className="flex justify-center pb-7">
                  <div className="min-w-24">{item}:</div>
                  <div className="text-[#00000080]">{aboutMeSection[item]}</div>
                </div>
              );
            })}
            <div className="text-center flex gap-4">
              <a
                href="https://drive.google.com/file/d/1HN46zLCcDOGHAD1eef9woJivIYYdYI8E/preview"
                target="_blank"
              >
                <button className="border-2  py-1 px-4 rounded-lg hover:scale-110 transition text-center">
                  <Download />
                  Resume
                </button>
              </a>
              <a href="mailto:amritthapa966@gmail.com">
                <button className="border-2  py-1 px-4 rounded-lg hover:scale-110 transition text-center">
                  <Mail />
                  E-Mail
                </button>
              </a>
              <a href="https://www.linkedin.com/in/thapa-amrit" target="_blank">
                <button className="border-2  py-1 px-4 rounded-lg hover:scale-110 transition text-center">
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
