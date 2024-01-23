"use client";
import React from "react";
import {Twitter, Linkedin, Github} from "lucide-react";
import SectionHead from "../components/SectionHead";
import SectionContainer from "../components/SectionContainer";
import SectionBody, {SubHeading, Paragraph} from "../components/SectionBody";

const aboutMeSection = {
  "Full Name": "Amrit Thapa",
  Phone: "+91-9886458098",
  email: "amritthapa966@gmail.com",
  Address: "Bengaluru - 560049",
};

const AboutMe = () => {
  return (
    <SectionContainer>
      <SectionHead>About Me</SectionHead>
      <SectionBody>
        <div>
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
        <div>
          <SubHeading>Hello There!</SubHeading>
          <Paragraph>
            As a frontend developer, I excels in building intuitive interfaces
            and elevating user experiences. i have implemented a monorepository
            architecture and microservice structure, developed admin dashboards
            which handles key business operations, and enhancing SEO score of
            the product notably increasing organic traffic. i have also worked
            on converting applications into PWAs.
          </Paragraph>
          <div className="flex gap-3">
            <Github
              onClick={() => console.log}
              className="p-2 rounded cursor-pointer hover:shadow "
              size={40}
            />
            <Linkedin
              onClick={() => console.log}
              className="p-2 rounded cursor-pointer hover:shadow "
              size={40}
            />
            <Twitter
              onClick={() => console.log}
              className="p-2 rounded cursor-pointer hover:shadow "
              size={40}
            />
          </div>
        </div>
      </SectionBody>
    </SectionContainer>
  );
};

export default AboutMe;
