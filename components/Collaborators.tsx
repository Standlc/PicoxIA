import React from "react";

const Collaborators: React.FC = () => {
  return (
    <div className="collaboratorsSection">
      <div className="collaboratorsWrapper">
        <a
          // href="http://www.fas-imagerie.com/"
          target="_blank"
          className="collaboratorLink"
        >
          <img src="fas-logo.png" alt="" className="collaboratorLogo" />
        </a>

        <a
          // href="https://www.digivet.fr/"
          target="_blank"
          className="collaboratorLink"
        >
          <img src="digivet-logo.svg" alt="" className="collaboratorLogo" />
        </a>

        <a
          // href="https://www.ger-int.com/"
          target="_blank"
          className="collaboratorLink"
        >
          <img src="ger-logo.png" alt="" className="collaboratorLogo" />
        </a>

        <a
          // href="https://www.veterinaire-languedocia.com/"
          target="_blank"
          className="collaboratorLink"
        >
          <img src="languedocia-logo.png" alt="" className="collaboratorLogo" />
        </a>
      </div>
    </div>
  );
};

export default Collaborators;
