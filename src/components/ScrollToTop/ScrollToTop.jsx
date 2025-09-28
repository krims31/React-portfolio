import React from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

const ScrollToTop = ({ showScrollTop }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <>
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <ArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;