import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";

const InfoFooter: React.FC = () => {
  return (
    <div className="infoFooterContainer">
      <div className="infoFooterItem">
        <img src="trophy-logo.jpg" alt="" className="trophyLogo" />
      </div>
      <div className="infoFooterItem">
        <a href="https://www.facebook.com/picoxia" target="_blank">
          <Facebook className="footerIcon" />
        </a>
        <a href="https://twitter.com/IaPicox" target="_blank">
          <Twitter className="footerIcon" />
        </a>
        <a
          href="https://www.linkedin.com/company/picoxia/about/"
          target="_blank"
        >
          <LinkedIn className="footerIcon" />
        </a>
      </div>
      <div className="infoFooterItem">+33 1 60 86 17 17</div>
    </div>
  );
};

export default InfoFooter;
