import React, { ReactElement } from "react";

const StepComponent: React.FC<{
  content: string;
  image: string;
  invert: boolean;
}> = ({ content, image, invert }) => {
  return (
    <div className="stepComponentContainer">
      <div className="stepLine" />

      <div
        style={invert ? { flexDirection: "row-reverse" } : {}}
        className="stepComponentWrapper"
      >
        <div className="stepImageWrapper">
          <img src={image} alt="" className="stepImage" />
        </div>
        <p className="stepDescription">{content}</p>
      </div>
    </div>
  );
};

export default StepComponent;
