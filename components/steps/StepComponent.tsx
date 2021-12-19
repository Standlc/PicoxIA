import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { handleStepItemAnimation } from "./stepItemAnimation";

const StepComponent: React.FC<{
  content: string;
  image: string;
  invert: boolean;
  callToAction: boolean;
}> = ({ content, image, invert, callToAction }) => {
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionImageRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      handleStepItemAnimation(descriptionTextRef, descriptionImageRef, invert);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="stepComponentContainer">
      <div ref={lineRef} className="stepLine" />
      <div
        style={invert ? { flexDirection: "row-reverse" } : {}}
        className="stepComponentWrapper"
      >
        <div ref={descriptionImageRef} className="stepImageWrapper">
          <img src={image} alt="" className="stepImage" />
        </div>
        <div className="stepDescriptionWrapper">
          <p ref={descriptionTextRef} className="stepDescription">
            {content}
          </p>
          {callToAction && (
            <button className="stepButton">Essayer la démo</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepComponent;
