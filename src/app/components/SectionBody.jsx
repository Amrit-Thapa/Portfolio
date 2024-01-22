import React from "react";

export const SubHeading = ({children}) => {
  return <div className="pb-5 text-3xl">{children}</div>;
};

export const Paragraph = ({children}) => {
  return <div className="pb-3 leading-7">{children}</div>;
};

const SectionBody = ({children}) => {
  return (
    <div>
      <div className="flex gap-14 max-w-[1140px] w-full p-3 flex-wrap md:flex-nowrap m-auto">
        {children}
      </div>
    </div>
  );
};

export default SectionBody;
