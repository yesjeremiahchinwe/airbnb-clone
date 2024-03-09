import { TbWorld } from "react-icons/tb"
import { IoIosMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import Logo from "../../../../components/logo/Logo";
import Button from "../../../../components/button/Button";
import classes from "./single-navbar.module.scss";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

const SinglePageNavbar = () => {
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
    <header className={`${classes['single-header']} ${currHeight ? classes["border-bottom"] : ""}`}>
      <div className={classes["single-header-wrapper"]}>
        <div className={classes.logo}>
          <Logo />
        </div>

        <section className={classes["single-sub-wrapper"]}>
          <div className={classes.divider} />

          <div className={classes.filter}>
            <h6>Anywhere</h6>
          </div>

          <div className={classes.divider} />

          <div className={classes.filter}>
            <h6>Any week</h6>
          </div>

          <div className={classes.divider} />

          <div className={classes["search"]}>
            <div className={classes.desc}>
              <h6>Add guests</h6>
            </div>

            <div className={classes["search-icon"]}>
              <BiSearch size={18} color="#ffffff" />
            </div>
          </div>
        </section>

        <div className={classes["top-right-corner"]}>
          <Button title="Airbnb your home"></Button>
          <TbWorld size={20} />

          <div className="">
            <IoIosMenu size={23} />
            <FaCircleUser size={30} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SinglePageNavbar;