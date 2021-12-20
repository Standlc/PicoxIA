import React from "react";
import NumberTitle from "./NumberTitle";

const NumbersSection: React.FC = () => {
  return (
    <div className="numberSectionContainer">
      <div className="numberSectionWrapper">
        <NumberTitle
          gradientTitle="900 utilisateurs"
          preTitle="Utilisé par plus de"
          postTitle=""
        />
        <NumberTitle
          gradientTitle="250 000 images analysées"
          preTitle=""
          postTitle="par des radiologues dans notre base de données"
        />
        <NumberTitle
          gradientTitle="34 000 radios analysées"
          preTitle="Plus de"
          postTitle=""
        />
        {/* <h1 className="numberSectionTitle">
          <span className="numberSpanGradient">250 000 images analysées </span> <br />
          par des radiologues dans notre base de données
        </h1>
        <h1 className="numberSectionTitle">
          Plus de <br />
          <span className="numberSpanGradient">34 000 radios analysées</span>
        </h1> */}
      </div>
    </div>
  );
};

export default NumbersSection;
