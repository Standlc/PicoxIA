import type { NextPage } from "next";
import Collaborators from "../components/Collaborators";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Presentation from "../components/presentation/Presentation";
import Steps from "../components/steps/Steps";

const Index: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="layeredWrapper">
        <img src="layered-waves1.svg" alt="" className="layeredWaves" />
      </div>
      <div
        style={{
          background:
            "linear-gradient(120deg, rgb(109, 65, 255), rgb(98, 255, 190))",
          paddingBottom: "250px",
          borderBottomLeftRadius: "-60px",
          position: "relative",
        }}
      >
        <Home />
        <Presentation />
        <img src="wave1.svg" alt="" className="wave" />
      </div>
      <Steps />
      <Collaborators />
    </>
  );
};

export default Index;
