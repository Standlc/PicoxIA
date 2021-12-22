import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { handleStepItemAnimation } from "./stepItemAnimation";

const StepComponent: React.FC<{
  boldText: string;
  text: string;
  image: string;
  invert: boolean;
  callToAction: boolean;
}> = ({ text, image, invert, callToAction, boldText }) => {
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionImageRef = useRef<HTMLParagraphElement | null>(null);

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
      <div
        className={
          invert ? "stepComponentWrapper invert" : "stepComponentWrapper"
        }
      >
        <div
          className={
            invert ? "stepImageContainer invert" : "stepImageContainer"
          }
        >
          <div
            className={invert ? "stepImageWrapper invert" : "stepImageWrapper"}
            ref={descriptionImageRef}
          >
            <img src={image} alt="" className="stepImage" />
          </div>
        </div>
        <div className="stepDescriptionWrapper">
          <p ref={descriptionTextRef} className="stepDescription">
            <span style={{ fontWeight: "600" }}>{boldText}</span>
            {text}
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
