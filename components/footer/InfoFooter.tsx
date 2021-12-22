import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";

const InfoFooter: React.FC = () => {
  return (
    <div className="infoFooterContainer">
      <div className="infoFooterItem">
        <img src="trophy-logo.jpg" alt="" className="trophyLogo" />
      </div>
      <div className="infoFooterItem">
        <Facebook className="footerIcon" />
        <Twitter className="footerIcon" />
        <LinkedIn className="footerIcon" />
      </div>
      <div className="infoFooterItem">+33 1 60 86 17 17</div>
    </div>
  );
};

export default InfoFooter;
