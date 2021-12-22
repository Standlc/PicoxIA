import React, { useEffect, useRef } from "react";

const PresentationComponent: React.FC<{
  image: string;
  boldText: string;
  text: string;
  callToAction: boolean;
  shownImage: string | undefined;
  setShownImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ image, boldText, text, callToAction, shownImage, setShownImage }) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        if (
          textRef.current.getBoundingClientRect().top <=
            window.innerHeight * (3 / 5) &&
          boldText !==
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ) {
          setShownImage(image);
          textRef.current.style.opacity = "1";
          textRef.current.style.transform = "translateY(0px)";
        } else if (
          boldText !==
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ) {
          textRef.current.style.opacity = "0.5";
          textRef.current.style.transform = "translateY(50px)";
        } else {
          setShownImage(image);
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div ref={textRef} className="presentationDescriptionWrapper">
        <p className="presentationDescription">
          <span style={{ fontWeight: 600 }}>{boldText}</span> {text}
        </p>
        {callToAction && (
          <button className="presentationButton">Essayer la démo</button>
        )}
      </div>
    </div>
  );
};

export default PresentationComponent;
