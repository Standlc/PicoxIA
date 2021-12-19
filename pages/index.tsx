import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Collaborators from "../components/Collaborators";
import Footer from "../components/footer/Footer";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import NumbersSection from "../components/numbers/NumbersSection";
import Presentation from "../components/presentation/Presentation";
import Steps from "../components/steps/Steps";

const Index: NextPage = () => {
  const [changeNavBarItemsColor, setChangeNavBarItemsColor] = useState(false);
  const stepsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stepsContainerRef.current) {
        if (stepsContainerRef.current.getBoundingClientRect().top <= 130) {
          setChangeNavBarItemsColor(true);
        } else {
          setChangeNavBarItemsColor(false);
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar changeNavBarItemsColor={changeNavBarItemsColor} />
      <div className="layeredWrapper">
        <img src="layered-waves1.svg" alt="" className="layeredWaves" />
      </div>
      <div
        style={{
          background:
            "linear-gradient(120deg, rgb(109, 65, 255), rgb(66, 230, 161))",
          paddingBottom: "250px",
          borderBottomLeftRadius: "-60px",
          position: "relative",
        }}
      >
        <Home />
        <Presentation />
        <img src="wave1.svg" alt="" className="wave" />
      </div>
      <div ref={stepsContainerRef}>
        <Steps />
      </div>
      <NumbersSection />
      <Footer />
    </>
  );
};

export default Index;
