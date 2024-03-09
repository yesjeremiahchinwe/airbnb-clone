import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import Logo from "../../../../components/logo/Logo";
import Button from "../../../../components/button/Button";
import classes from "./navbar.module.scss";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import NavigateExperience from "../navigation/NavigateExperience";

const ExperienceNavbar = () => {
  return (
    <header className={classes["experience_header"]}>
      <div className={classes["header-wrapper"]}>
        <div className={classes.logo}>
          <Logo />
        </div>

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
      <section className={classes["mobile_header_experience"]}>
        <div className={classes.wrap}>
          <div>
            <Link to="/">
              <BiChevronLeft size={30} />
            </Link>
            <span>Add date</span>
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
        </div>

        <NavigateExperience />
      </section>
    </header>
  );
};

export default ExperienceNavbar;
