import React, { useEffect, useRef } from "react";

const NumberTitle: React.FC<{
  gradientTitle: string;
  preTitle: string;
  postTitle: string;
}> = ({ gradientTitle, preTitle, postTitle }) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        if (
          titleRef.current.getBoundingClientRect().top +
            titleRef.current.getBoundingClientRect().height <=
          window.innerHeight
        ) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
        } else {
          titleRef.current.style.opacity = "0";
          titleRef.current.style.transform = "translateX(70px)";
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="numberSectionTitleWrapper">
      <div className="dividerNumber" />
      <h1 ref={titleRef} className="numberSectionTitle">
        {preTitle && preTitle}
        {preTitle && <br />}
        <span className="numberSpanGradient">{gradientTitle}</span>
        <br />
        {postTitle}
      </h1>
    </div>
  );
};

export default NumberTitle;
