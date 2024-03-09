import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import classes from "./back.module.scss";

const BackToTop = () => {
  const [isStarted, setISStarted] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [isTop, setIsTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (currentHeight < 200) {
        setIsLoaded(true);
    }
    
    return () => setIsLoaded(false);
  }, [currentHeight]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = document.documentElement.scrollTop;
      setCurrentHeight(scrollY);

      if (scrollY < 300) {
        setISStarted(true);
        setIsLoaded(false);
      } else if (currentHeight < scrollY) {
        setISStarted(false);
      }
    });
  }, [isStarted, currentHeight]);

  useEffect(() => {
    if (isTop) {
      setIsTop(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [isTop]);

  return (
    <>
      {!isLoaded && (
        <section
          className={`${classes["back_to_top_container"]} ${
            !isStarted ? classes.fixed : classes.hide
          }`}
        >
          <div onClick={() => setIsTop(true)}>
            <FaArrowUp size={15} />
            <h6>Back to top</h6>
          </div>
        </section>
      )}
    </>
  );
};

export default BackToTop;
