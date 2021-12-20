import React from "react";
import Collaborators from "./Collaborators";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="leftWrapper">
          <div className="homeTitle">
            Picox<span style={{ fontWeight: 300 }}>IA</span>
            <span style={{ marginLeft: "20px" }}>
              <img src="picoxIALogo.png" alt="" />
            </span>{" "}
          </div>
          <p className="homeDescription">
            L'outil d'analyse radiographique qui révolutionne l'imagerie
            vétérinaire.
          </p>
          <div className="homeButton">
            Démarrer
            <div className="arrowWrapper">
              <div className="arrowComponent top" />
              <div className="arrowComponent middle" />
              <div className="arrowComponent bottom" />
            </div>
          </div>
          <Collaborators />
        </div>
        <div className="rightWrapper">
          <div className="homeImageWrapper">
            <img src="screenShot1.png" alt="" className="homeImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
