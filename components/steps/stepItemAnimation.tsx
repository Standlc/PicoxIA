export const handleStepItemAnimation = (
  descriptionTextRef: React.MutableRefObject<HTMLParagraphElement | null>,
  descriptionImageRef: React.MutableRefObject<HTMLParagraphElement | null>,
  invert: boolean
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
        ? "translateX(-50px)"
        : "translateX(50px)";
      descriptionTextRef.current.style.opacity = "0";
      descriptionImageRef.current.style.transform = invert
        ? "translateX(50px)"
        : "translateX(-50px)";
      descriptionImageRef.current.style.opacity = "0";
    }
  }
};
