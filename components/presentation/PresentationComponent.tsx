import React from "react";

const PresentationComponent: React.FC = () => {
  return (
    <div className="presentationComponentWrapper">
      <div className="presentationImageContainer">
        <div className="presentationImageWrapper">
          <img
            src="screenShot1.png"
            alt=""
            className="presentationComponentImage"
          />
        </div>
      </div>
      <div className="presentationDescriptionsContainer">
        <div className="presentationDescriptionWrapper">
          <p className="presentationDescription">
            <span style={{ fontWeight: 700, color: "white" }}>
              Lorem ipsum dolor sit amet consectetur.
            </span>{" "}
            Adipisicing elit. Repellat adipisci fuga, ducimus laboriosam
            veritatis eius quae laborum deserunt cum ullam. Lorem ipsum dolor
            sit, amet consectetur.
          </p>
        </div>
        <div className="presentationLine" />
        <div className="presentationDescriptionWrapper">
          <p className="presentationDescription">
            <span style={{ fontWeight: 700, color: "white" }}>
              Nemo ea eveniet illum modi omnis.
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            eveniet eligendi nobis quod adipisci incidunt soluta aspernatur,
            quae odit voluptatibus. Eius quae impedit id delectus et autem, odio
            fuga voluptas.
          </p>
        </div>
        <div className="presentationLine" />

        <div className="presentationDescriptionWrapper">
          <p className="presentationDescription">
            <span style={{ fontWeight: 700, color: "white" }}>
              Lorem ipsum dolor sit.
            </span>{" "}
            Repellat adipisci fuga, ducimus laboriosam veritatis eius quae
            laborum deserunt cum ullam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresentationComponent;
