"use client";
import classNames from "classnames";
import React, {useState, useEffect} from "react";
import {MoveUp} from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={classNames(
        "fixed bottom-2 right-0 md:bottom-16 md:right-16 block  px-4 py-2 rounded cursor-pointer",
        {
          hidden: !isVisible,
        },
      )}
      onClick={scrollToTop}
    >
      <div className="p-2 bg-black rounded-full md:p-4 animate-bounce">
        <MoveUp className="text-white" />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
