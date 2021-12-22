import React, { useEffect, useRef, useState } from "react";
import { handleStepsTitleAnimation } from "../steps/stepTitleAnimation";
import PresentationComponent from "./PresentationComponent";

const Presentation: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const [shownImage, setShownImage] = useState<string | undefined>("test1.jpg");

  useEffect(() => {
    const handleScroll = () => {
      handleStepsTitleAnimation(titleRef, paragraphRef);
      if (imageContainerRef.current && imageWrapperRef.current) {
        if (
          imageContainerRef.current.getBoundingClientRect().top +
            imageContainerRef.current.getBoundingClientRect().height <=
          window.innerHeight + 0
        ) {
          imageWrapperRef.current.style.transform = "scale(1)";
          imageWrapperRef.current.style.opacity = "1";
        } else {
          imageWrapperRef.current.style.transform = "scale(0.95)";
          imageWrapperRef.current.style.opacity = "0.85";
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="presentationSection">
      <div className="presentationWrapper">
        <h1 ref={titleRef} className="presentationTitle">
          Vous ne serez plus seul face aux radios
        </h1>
        <p ref={paragraphRef} className="presentationSubTitle">
          Grâce à un assistant numérique expérimenté, présent pour vous seconder
          sur chaque cliché.
        </p>
        <div className="presentationFrame">
          <div ref={imageContainerRef} className="presentationImageContainer">
            <div ref={imageWrapperRef} className="presentationImageWrapper">
              <img
                // src="screenShot1.png"
                src={shownImage}
                alt=""
                className="presentationComponentImage"
              />
            </div>
          </div>
          <div className="descriptionsContainer">
            <PresentationComponent
              text="Porro, iure ab. Ad minus dolore quasi odit, in laboriosam porro natus nam asperiores accusamus quisquam itaque minima tenetur. Similique, ipsa provident."
              boldText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              image="test1.jpg"
              shownImage={shownImage}
              setShownImage={setShownImage}
              callToAction={false}
            />
            <PresentationComponent
              text="temporibus quas commodi, deserunt officia eius harum neque delectus voluptas velit nesciunt porro quod saepe. Temporibus, iure."
              boldText="Debitis minus dolorum sunt alias,"
              image="test2.jpg"
              shownImage={shownImage}
              setShownImage={setShownImage}
              callToAction={false}
            />
            <PresentationComponent
              text="Illum eum, at adipisci velit molestiae error blanditiis deleniti dolorem nemo animi doloremque eius odio itaque."
              boldText="Quibusdam quidem perspiciatis officia ratione maxime."
              image="test3.jpg"
              shownImage={shownImage}
              setShownImage={setShownImage}
              callToAction={true}
            />
          </div>
        </div>
      </div>
      <img src="wave1.svg" alt="" className="wave" />
    </div>
  );
};

export default Presentation;
