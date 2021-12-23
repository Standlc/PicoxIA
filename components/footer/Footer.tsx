import { ArrowRightRounded } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import { handleFooterAnimation } from "./footerAnimation";
import InfoFooter from "./InfoFooter";

const Footer: React.FC = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const bottomWrapperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      handleFooterAnimation(titleRef);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="footerContainer">
      <img src="wave2.svg" alt="" className="transitionWaveFooter" />
      <div className="footerWrapper">
        <div className="footerTop">
          <div ref={titleRef} className="footerTitleWrapper">
            <h1  className="footerTitle">
              Lancez vous avec <br />{" "}
              <span style={{ fontWeight: 100 }}>Picox</span>
              <span style={{ fontWeight: 300 }}>IA</span>
            </h1>
            <button className="footerButton">
              Je me lance
              <ArrowRightRounded className="footerArrow" />
            </button>
          </div>
        </div>
        <div ref={bottomWrapperRef} className="footerBottom">
          <InfoFooter />
        </div>
      </div>
      <img src="layered-waves2.svg" alt="" className="layeredWavesFooter" />
    </div>
  );
};

export default Footer;
