"use client";
import React from "react";
import {Kaushan_Script} from "next/font/google";
import classNames from "classnames";
import {Linkedin, Github, FileText} from "lucide-react";
import {GITHUB, LINKEDIN, RESUME} from "../Utility";

const kaushan = Kaushan_Script({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Introduction = () => {
  return (
    <div
      className={classNames(
        "h-screen bg-black flex w-full",
        "items-center justify-center text-white flex-col",
      )}
    >
      <div className="p-2 animate-fadeIn">
        <div
          before="-"
          className={classNames(
            "text-5xl text-center font-normal lg:text-8xl p-4",
            "before:content-[attr(before)] after:content-[attr(before)]",
            kaushan.className,
          )}
        >
          Amrit Thapa
        </div>
        <div className="text-xs text-center md:text-lg">
          Web Developer / Front-end Engineer
        </div>
        <div className="flex justify-center w-full gap-3 pt-4">
          <Github
            onClick={() => window.open(GITHUB, "_blank")}
            className="p-2 rounded cursor-pointer hover:border"
            size={40}
          />
          <Linkedin
            onClick={() => window.open(LINKEDIN, "_blank")}
            className="p-2 rounded cursor-pointer hover:border"
            size={40}
          />
          <FileText
            onClick={() => window.open(RESUME, "_blank")}
            className="p-2 rounded cursor-pointer hover:border"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
