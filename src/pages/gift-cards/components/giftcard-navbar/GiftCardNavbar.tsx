import Logo from "../../../../components/logo/Logo";
import classes from "./giftcard-navbar.module.scss";
import { useEffect, useState } from "react";


const GiftCardNavbar = () => {
  const [currHeight, setCurrHeight] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = document.documentElement.scrollTop;

      if (scrollY > 100) {
        setCurrHeight(true);
      } else {
        setCurrHeight(false);
      }
    });
  }, [currHeight])


  return (
    <header className={`${currHeight ? classes['border-bottom'] : ""} ${classes['giftcard-header']}`}>
      <div className={classes["header-wrapper"]}>
        <div className={classes.logo}>
          <Logo />
        </div>

        <div className={classes["top-right-corner"]}>
          <span>Redeem</span>
          <button>Buy gift card</button>
        </div>
      </div>
    </header>
  );
};

export default GiftCardNavbar;