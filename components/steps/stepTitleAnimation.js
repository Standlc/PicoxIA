export const handleStepsTitleAnimation = (titleRef, paragraphRef) => {
  if (titleRef.current && paragraphRef.current) {
    if (
      titleRef.current.getBoundingClientRect().top +
        titleRef.current.getBoundingClientRect().height <=
      window.innerHeight
    ) {
      titleRef.current.style.opacity = "1";
      titleRef.current.style.transform = "translateY(0)";
      paragraphRef.current.style.opacity = "1";
      paragraphRef.current.style.transform = "translateY(0)";
    } else {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(40px)";
      paragraphRef.current.style.opacity = "0";
      paragraphRef.current.style.transform = "translateY(40px)";
    }
  }
};
