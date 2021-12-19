import React from "react";

const PresentationComponent: React.FC<{ line: boolean }> = ({ line }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <div className="presentationLine" /> */}
      <div className="presentationDescriptionWrapper">
        <p className="presentationDescription">
          <span style={{ fontWeight: 700, color: "white" }}>
            Nemo ea eveniet illum modi omnis.
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet
          eligendi nobis quod adipisci incidunt soluta aspernatur, quae odit
          voluptatibus. Eius quae impedit id delectus et autem, odio fuga
          voluptas.
        </p>
      </div>
    </div>
  );
};

export default PresentationComponent;
