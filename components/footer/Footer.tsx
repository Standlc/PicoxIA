import React from "react";
import InfoFooter from "./InfoFooter";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <img src="wave2.svg" alt="" className="transitionWaveFooter" />
      <div className="footerWrapper">
        <div className="footerTop">
          <h1 className="footerTitle">
            Lancez vous avec <br />{" "}
            <span style={{ fontWeight: 100 }}>Picox</span>
            <span style={{ fontWeight: 300 }}>IA</span>
          </h1>
          <button className="footerButton">Je me lance</button>
        </div>
        <div className="footerBottom">
          <InfoFooter />
        </div>
      </div>
      <img src="layered-waves2.svg" alt="" className="layeredWavesFooter" />
    </div>
  );
};

export default Footer;
