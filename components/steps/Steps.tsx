import React, { useEffect, useRef } from "react";
import StepComponent from "./StepComponent";
import { handleStepsTitleAnimation } from "./stepTitleAnimation";

const Steps: React.FC = () => {
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
    <div className="stepsSection">
      <div className="stepsSectionWrapper">
        <h1 ref={titleRef} className="stepsTitle">
          Aussi performant <br />
          <span className="spanGradient">qu'intuitif</span>
        </h1>
        <p ref={paragraphRef} className="stepsSubTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil
          nobis placeat ducimus.
        </p>
        <StepComponent
          boldText="Gilssez votre image,"
          text=" quelque soit le format."
          image="screenShot1.png"
          invert={false}
          callToAction={false}
        />
        <StepComponent
          boldText="Recevez une rapport détaillé instantannément,"
          text=" vous assistant sur chaque cliché."
          image="screenShot1.png"
          invert={true}
          callToAction={true}
        />
      </div>
    </div>
  );
};

export default Steps;
