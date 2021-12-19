export const handleStepItemAnimation = (
  descriptionTextRef,
  descriptionImageRef,
  invert
) => {
  if (descriptionTextRef.current && descriptionImageRef.current) {
    if (
      descriptionTextRef.current.getBoundingClientRect().top +
        descriptionTextRef.current.getBoundingClientRect().height <=
      window.innerHeight
    ) {
      descriptionTextRef.current.style.transform = "translateX(0)";
      descriptionTextRef.current.style.opacity = "1";
      descriptionImageRef.current.style.transform = "translateX(0)";
      descriptionImageRef.current.style.opacity = "1";
    } else {
      descriptionTextRef.current.style.transform = invert
        ? "translateX(-40px)"
        : "translateX(40px)";
      descriptionTextRef.current.style.opacity = "0";
      descriptionImageRef.current.style.transform = invert
        ? "translateX(40px)"
        : "translateX(-40px)";
      descriptionImageRef.current.style.opacity = "0";
    }
  }
};
