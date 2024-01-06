import classNames from "classnames";
import React from "react";

const Introduction = () => {
  return (
    <div>
      <div
        className={classNames(
          "h-[600px] bg-black flex",
          "items-center justify-center text-white flex-col",
        )}
      >
        <div className="p-2">
          <div className="text-3xl lg:text-6xl text-center">Amrit Thapa</div>
          <div className="text-xs md:text-lg">
            Software Engineer / Front-end Engineer
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Introduction;
