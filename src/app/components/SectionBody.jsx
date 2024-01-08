import React from "react";

export const SubHeading = ({children}) => {
  return <div className="text-3xl pb-5">{children}</div>;
};

export const Paragraph = ({children}) => {
  return <div className="leading-7 pb-3">{children}</div>;
};

const SectionBody = ({children}) => {
  return (
    <div>
      <div className="flex gap-14 max-w-[1140px] p-3 flex-wrap md:flex-nowrap m-auto">
        {children}
      </div>
    </div>
  );
};

export default SectionBody;
