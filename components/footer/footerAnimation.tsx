export const handleFooterAnimation = (
  elementRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  if (elementRef.current) {
    if (
      elementRef.current.getBoundingClientRect().top +
        elementRef.current.getBoundingClientRect().height <=
      window.innerHeight
    ) {
      console.log("object");
      elementRef.current.style.opacity = "1";
      elementRef.current.style.transform = "translateY(0)";
    } else {
      elementRef.current.style.opacity = "0";
      elementRef.current.style.transform = "translateY(50px)";
    }
  }
};
