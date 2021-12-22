import React, { useEffect, useRef, useState } from "react";

const PresentationComponent: React.FC<{
  image: string;
  boldText: string;
  text: string;
  callToAction: boolean;
  animation: boolean;
  setShownImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ image, boldText, text, callToAction, setShownImage, animation }) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  // const [enableImageChange, setEnableImageChange] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        if (
          textRef.current.getBoundingClientRect().top <=
          window.innerHeight * (3 / 5)
        ) {
          setShownImage(image);
        }
        if (
          textRef.current.getBoundingClientRect().top <=
            window.innerHeight * (3 / 5) &&
          animation
        ) {
          textRef.current.style.opacity = "1";
          textRef.current.style.transform = "translateY(0px)";
        } else if (animation) {
          textRef.current.style.opacity = "0.5";
          textRef.current.style.transform = "translateY(50px)";
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [setShownImage]);

  // useEffect(() => {
  //   if (enableImageChange) {
  //     setShownImage(image);
  //   }
  // }, [enableImageChange]);

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
