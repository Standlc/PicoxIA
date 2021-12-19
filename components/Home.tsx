import React from "react";
import Collaborators from "./Collaborators";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="leftWrapper">
          <h1 className="homeTitle">
            Picox<span style={{ fontWeight: 300 }}>IA</span>
          </h1>
          <p className="homeDescription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            veritatis corrupti amet vel voluptatum quis impedit doloremque,
            repellat laborum.
          </p>
          <div className="homeButton">
            Start now
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
