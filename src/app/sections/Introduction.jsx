"use client";
import React from "react";
import {Kaushan_Script} from "next/font/google";
import classNames from "classnames";
import {Linkedin, Github, FileText} from "lucide-react";

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
      <div className="p-2">
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
            onClick={() =>
              window.open("https://github.com/Amrit-Thapa", "_blank")
            }
            className="p-2 rounded cursor-pointer hover:border"
            size={40}
          />
          <Linkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/thapa-amrit", "_blank")
            }
            className="p-2 rounded cursor-pointer hover:border"
            size={40}
          />
          <FileText
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1HN46zLCcDOGHAD1eef9woJivIYYdYI8E/view?usp=sharing",
                "_blank",
              )
            }
            className="p-2 rounded cursor-pointer hover:border"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
