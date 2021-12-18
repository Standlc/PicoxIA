import React from "react";
import PresentationComponent from "./PresentationComponent";

const Presentation: React.FC = () => {
  return (
    <div className="presentationSection">
      <div className="presentationWrapper">
        <h1 className="presentationTitle">
          Vous ne serez plus seul face aux radios.
        </h1>
        {/* <p className="presentaionSubTitle">
          Grâce à un assistant numérique expérimenté, présent pour vous seconder
          sur chaque cliché.
        </p> */}
        <PresentationComponent />
      </div>
    </div>
  );
};

export default Presentation;
