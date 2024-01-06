"use client";
import React from "react";
import {Twitter, Linkedin, Github} from "lucide-react";

const aboutMeSection = {
  "Full Name": "Amrit Thapa",
  Phone: "+91-9886458098",
  email: "amritthapa966@gmail.com",
  Address: "Hirandahalli, Bengaluru - 560049",
};

const AboutMe = () => {
  return (
    <div className="p-2 flex flex-col items-center">
      <div className="flex items-center justify-center text-5xl md:text-4xl p-4 min-h-[140px]">
        About Me
      </div>
      <div className="flex gap-14 max-w-[1140px] p-3 flex-wrap md:flex-nowrap">
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
          <h1 className="text-3xl pb-5">Hello There!</h1>
          <p className="leading-7 pb-3">
            As a frontend developer, I excels in building intuitive interfaces
            and elevating user experiences. i have implemented a monorepository
            architecture and microservice structure, developed admin dashboards
            which handles key business operations, and enhancing SEO score of
            the product notably increasing organic traffic. i have also worked
            on converting applications into PWAs.
          </p>
          <div className="flex gap-3">
            <Github
              onClick={() => console.log}
              className="cursor-pointer hover:shadow rounded p-2 "
              size={40}
            />
            <Linkedin
              onClick={() => console.log}
              className="cursor-pointer hover:shadow rounded p-2 "
              size={40}
            />
            <Twitter
              onClick={() => console.log}
              className="cursor-pointer hover:shadow rounded p-2 "
              size={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
