import React from "react";

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
          <div className="homeButton">Start now</div>
       
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
