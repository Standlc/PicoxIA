import { ArrowRight, ArrowRightRounded } from "@material-ui/icons";
import React, { useLayoutEffect, useRef } from "react";
import Collaborators from "./Collaborators";

const Home: React.FC = () => {
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (textContainerRef.current && imageContainerRef.current) {
      textContainerRef.current.style.opacity = "0";
      textContainerRef.current.style.transform = "translateY(50px)";
      imageContainerRef.current.style.opacity = "0";
      imageContainerRef.current.style.transform = "translateX(50px)";
    }
    setTimeout(() => {
      if (textContainerRef.current && imageContainerRef.current) {
        textContainerRef.current.style.opacity = "1";
        textContainerRef.current.style.transform = "translateY(0)";
        imageContainerRef.current.style.opacity = "1";
        imageContainerRef.current.style.transform = "translateY(0)";
      }
    }, 500);
  }, []);

  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div ref={textContainerRef} className="leftWrapper">
          <div className="leftTopWrapper">
            <div className="homeTitle">
              Picox
              <span style={{ fontWeight: 300 }}>IA</span>
              <img className="homePicoxiaLogo" src="picoxIALogo.png" alt="" />
            </div>
            <p className="homeDescription">
              L'outil d'analyse radiographique qui révolutionne l'imagerie
              vétérinaire.
            </p>
            <div className="homeButton">
              Démarrer
              <ArrowRightRounded className="homeArrow" />
            </div>
          </div>
          <Collaborators />
        </div>
        <div ref={imageContainerRef} className="rightWrapper">
          <div className="homeImageWrapper">
            <img src="screenShot1.png" alt="" className="homeImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
