import React, { useEffect, useRef } from "react";
import { handleStepsTitleAnimation } from "../steps/stepTitleAnimation";
import PresentationComponent from "./PresentationComponent";

const Presentation: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      handleStepsTitleAnimation(titleRef, paragraphRef);
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
        <div className="presentationFrame">
          <div className="presentationImageContainer">
            <div className="presentationImageWrapper">
              <img
                src="screenShot1.png"
                alt=""
                className="presentationComponentImage"
              />
            </div>
          </div>
          <div className="descriptionsContainer">
            <PresentationComponent line={false} />
            <PresentationComponent line={true} />
            <PresentationComponent line={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
