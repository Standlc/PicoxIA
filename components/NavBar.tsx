import React, { useRef } from "react";
import { useEffect } from "react";

const NavBar: React.FC<{ changeNavBarItemsColor: boolean }> = ({
  changeNavBarItemsColor,
}) => {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (changeNavBarItemsColor && navBarRef.current) {
      navBarRef.current.style.color = "rgb(70,70,70)";
    } else if (navBarRef.current) {
      navBarRef.current.style.color = "white";
    }
  }, [changeNavBarItemsColor]);

  return (
    <div className="navBarContainer">
      <div ref={navBarRef} className="navBar">
        <h1 className="navBarLeft">PicoxIA</h1>
        <div className="navBarCenter">
          <div className="navBarItem">blabla</div>
          <div className="navBarItem">blabla</div>
          <div className="navBarItem">blabla</div>
        </div>
        <div className="navBarRight">
          <button className="navBarRightItem">Sign In</button>
          <button className="navBarRightItem invert">Register</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
