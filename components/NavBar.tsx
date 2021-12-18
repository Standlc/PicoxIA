import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="navBarContainer">
      <div className="navBar">
        <h1 className="navBarLeft">PicoxIA</h1>
        <div className="navBarCenter">
          <button className="navBarItem">blabla</button>
          <button className="navBarItem">blabla</button>
          <button className="navBarItem">blabla</button>
        </div>
        <div className="navBarRight">
          <button className="navBarRightItem">Sign up</button>
          <button className="navBarRightItem invert">Register</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
