import React from "react";
import {twMerge} from "tailwind-merge";

const SectionHead = ({children, className, refe}) => {
  return (
    <div
      className={twMerge(className, "pb-11 md:pb-28 text-center text-5xl")}
      ref={refe}
    >
      {children}
    </div>
  );
};

export default SectionHead;
