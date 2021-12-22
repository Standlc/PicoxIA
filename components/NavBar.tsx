import React, { MutableRefObject, useRef, useState } from "react";
import { useEffect } from "react";

const NavBar: React.FC<{
  changeNavBarItemsColor: boolean;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ changeNavBarItemsColor, containerRef }) => {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const topBurgerMenuComp = useRef<HTMLDivElement | null>(null);
  const bottomBurgerMenuComp = useRef<HTMLDivElement | null>(null);
  const navBarLinksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (changeNavBarItemsColor && navBarRef.current) {
      navBarRef.current.style.color = "rgb(70,70,70)";
    } else if (navBarRef.current) {
      navBarRef.current.style.color = "white";
    }
  }, [changeNavBarItemsColor]);

  const handleShowMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
      if (
        topBurgerMenuComp.current &&
        bottomBurgerMenuComp.current &&
        containerRef.current &&
        navBarLinksRef.current
      ) {
        topBurgerMenuComp.current.style.transform =
          "translateX(4px) translateY(-1px) rotate(45deg)";
        bottomBurgerMenuComp.current.style.transform =
          "translateX(4px) translateY(1px) rotate(-45deg)";
        containerRef.current.style.transform = "scale(1)";
        navBarLinksRef.current.style.opacity = "1";
        navBarLinksRef.current.style.transform = "scale(1)";
        navBarLinksRef.current.style.pointerEvents = "auto";
      }
    } else {
      setShowMenu(false);
      if (
        topBurgerMenuComp.current &&
        bottomBurgerMenuComp.current &&
        containerRef.current &&
        navBarLinksRef.current
      ) {
        topBurgerMenuComp.current.style.transform =
          "rotate(0) translateX(0) translateY(0)";
        bottomBurgerMenuComp.current.style.transform =
          "rotate(0) translateX(0) translateY(0)";
        containerRef.current.style.transform = "scale(1)";
        navBarLinksRef.current.style.opacity = "0";
        navBarLinksRef.current.style.pointerEvents = "none";
        // navBarLinksRef.current.style.transform = "scale(1.1)";
      }
    }
  };

  return (
    <div className="navBarContainer">
      <div ref={navBarRef} className="navBar">
        <div className="navBarLeft">
          Picox<span style={{ fontWeight: 500 }}>IA</span>
        </div>
        <div ref={navBarLinksRef} className="navBarLinks">
          <div className="navBarCenter">
            <a className="navBarItem">Historique</a>
            <a className="navBarItem">Télécharger</a>
            <a className="navBarItem">En ligne</a>
          </div>
          <div className="navBarRight">
            <button className="navBarRightItem">Sign In</button>
            <button className="navBarRightItem invert">Register</button>
          </div>
        </div>
        <div className="mobileBurger" onClick={handleShowMenu}>
          <div ref={topBurgerMenuComp} className={"burgerMenuComponent top"} />
          <div
            ref={bottomBurgerMenuComp}
            className={"burgerMenuComponent bottom"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
