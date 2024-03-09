import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import classes from "./navbar.module.scss";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";


const Navbar = () => {
  const [currHeight, setCurrHeight] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = document.documentElement.scrollTop;

      if (scrollY > 50) {
        setCurrHeight(true);
      } else {
        setCurrHeight(false);
      }
    });
  }, [currHeight])


  return (
    <header className={`${classes['home_header']}`}>
      <div className={classes["header-wrapper"]}>
        <div className={classes.logo}>
          <Logo />
        </div>

        {currHeight ? (
          <section className={classes["sub-header-wrapper"]}>
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
        ) : (
          <div className={classes.buttons}>
            <Button title="Stays"></Button>
            <Button title="Experiences"></Button>
            <Button title="Online Experience"></Button>
          </div>
        )}

        <div className={classes["top-right-corner"]}>
          <Button title="Airbnb your home"></Button>
          <TbWorld size={20} />

          <div>
            <IoIosMenu size={23} />
            <FaCircleUser size={30} />
          </div>
        </div>
      </div>

       {/* -------------- Mobile View ---------------- */}
       <section className={classes["sub-header-wrapper-mobile"]}>
        <div className={classes["mobile-search"]}>
          <BiSearch size={25} color="#000" fontWeight={700} />

          <div className={classes.desc}>
            <h6>Anywhere</h6>
            <p>
              <span>Any week . Add guests</span>
            </p>
          </div>
        </div>

        <div className={classes["filter-options"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "#000",
              height: "18px",
              width: "18px",
              stroke: "#717171",
              strokeWidth: "3",
              overflow: "visible",
            }}
          >
            <path
              fill="#000"
              d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
            ></path>
          </svg>
        </div>
      </section>
    </header>
  );
};

export default Navbar;