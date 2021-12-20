import React, { useEffect, useRef } from "react";
import { handleStepsTitleAnimation } from "../steps/stepTitleAnimation";
import PresentationComponent from "./PresentationComponent";

const Presentation: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      handleStepsTitleAnimation(titleRef, paragraphRef);
      if (wrapperRef.current && imageWrapperRef.current) {
        if (wrapperRef.current.getBoundingClientRect().top <= 0) {
          imageWrapperRef.current.style.transform = "scale(1)";
          imageWrapperRef.current.style.opacity = "1";
        } else {
          imageWrapperRef.current.style.transform = "scale(0.95)";
          imageWrapperRef.current.style.opacity = "0.85";
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="presentationSection">
      <div className="presentationWrapper">
        <h1 ref={titleRef} className="presentationTitle">
          Vous ne serez plus seul face aux radios
        </h1>
        <p ref={paragraphRef} className="presentationSubTitle">
          Grâce à un assistant numérique expérimenté, présent pour vous seconder
          sur chaque cliché.
        </p>
        <div ref={wrapperRef} className="presentationFrame">
          <div className="presentationImageContainer">
            <div ref={imageWrapperRef} className="presentationImageWrapper">
              <img
                src="screenShot1.png"
                alt=""
                className="presentationComponentImage"
              />
            </div>
          </div>
          <div className="descriptionsContainer">
            <PresentationComponent line={false} callToAction={false} />
            <PresentationComponent line={true} callToAction={false} />
            <PresentationComponent line={true} callToAction={true} />
          </div>
        </div>
      </div>
      <img src="wave1.svg" alt="" className="wave" />
    </div>
  );
};

export default Presentation;
