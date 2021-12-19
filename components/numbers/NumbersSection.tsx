import React from "react";

const NumbersSection: React.FC = () => {
  return (
    <div className="numberSectionContainer">
      <div className="numberSectionWrapper">
        <h1 className="numberSectionTitle">
          Aimé et utilisé par plus de <br />
          <span className="spanGradient">900 utilisateurs</span>
        </h1>
      </div>
    </div>
  );
};

export default NumbersSection;
