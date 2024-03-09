import classes from "./fixed-footer.module.scss"
import { useEffect, useState } from "react";


const GiftCardFixedFooter = () => {
  const [isStarted, setISStarted] = useState(false)
  const [currentHeight, setCurrentHeight] = useState(0)


  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = document.documentElement.scrollTop
      setCurrentHeight(scrollY)

      if (scrollY > currentHeight) {
        setISStarted(true)
      } else if (currentHeight > scrollY) {
        setISStarted(false)
      }

    })
  }, [isStarted, currentHeight])

  
  return (
    <section className={`${classes['fixed-footer-container']} ${!isStarted ? classes.fixed : classes.hide}`}>
      <div className={classes["top-right-corner"]}>
          <span>Redeem</span>
          <button>Buy gift card</button>
        </div>
    </section>
  );
};

export default GiftCardFixedFooter;
