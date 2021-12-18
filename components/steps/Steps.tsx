import { AddPhotoAlternate } from "@material-ui/icons";
import React from "react";
import StepComponent from "./StepComponent";

const Steps: React.FC = () => {
  return (
    <div className="stepsSection">
      <div className="stepsSectionWrapper">
        <h1 className="stepsTitle">
          Aussi performant <br />
          <span className="spanGradient"> qu'intuitif.</span>
        </h1>
        <p className="stepsSubTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil
          nobis placeat ducimus.
        </p>
        <StepComponent
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          image="screenShot1.png"
          invert={false}
        />

        <StepComponent
          content=" Assumenda minima, dolorem officia nam illo doloremque."
          image="screenShot1.png"
          invert={true}
        />
      </div>
    </div>
  );
};

export default Steps;
