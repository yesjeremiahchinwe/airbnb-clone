import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import classes from "./hero-content.module.scss";
import helpFour from "/assets/help_four.png";

const HeroContent = () => {
  return (
    <section className={classes["hero-content-container"]}>
      <button>Log in or sign up</button>

      <div className={classes.links}>
        <Link to="/help">
          Home <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/all-topics">
          All topics <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/topic/1254">
          Searching and booking <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/topic/1339">
          Boooking places to stay <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/topic/1677">
          The basics <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help">AirCover for guests </Link>
      </div>

      <div className={classes["hero-content"]}>
        <div className={classes.wrap}>
          <h6>Guild . Guest</h6>
          <h2>AirCover for guests</h2>
          <img src={helpFour} alt="AirCover banner" />
          <p>
            Every booking comes with AirCover for guests. If there&apos;s a
            serious issue with your Airbnb that your Host can't resolve,
            we&apos;ll help you find a similar place, depending on availability
            at comparable pricing. If a similar place isn&apos;t available or
            you&apos;d prefer not to rebook, we&apos;ll give you a full or
            partial refund.
          </p>

          <p>
            If anything comes up, your Host is your best point of contact;
            it&apos;s likely they&apos;ll be able to fix it. You can{" "}
            <Link to="#">message your Host</Link> directly from your inbox to
            let them know what&apos;s going on.
          </p>
        </div>

        <div className={classes["right_sidebar"]}>
          <h5>Get help with your reservations, account, and more</h5>
          <button>Log in or sign up</button>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;