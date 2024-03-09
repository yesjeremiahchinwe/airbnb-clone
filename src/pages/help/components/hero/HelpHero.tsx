import { BiSearch } from "react-icons/bi";
import classes from "./help-hero.module.scss";

const HelpHero = () => {
  return (
    <section className={classes["help-hero-container"]}>
        <h2>Hi, how can we help?</h2>

        {/* ------------- Mobile View -------------- */}
        <div className={classes["help-search-mobile"]}>
            <BiSearch size={20} color="#FF385C" fontWeight={700} />
            <span>Search help</span>
        </div>


        {/* ------------- Desktop View --------------- */}
        <div className={classes["help-search"]}>
          <span>Search how-tos and more</span>

          <div className={classes["search-icon"]}>
            <BiSearch size={20} color="#fff" />
          </div>
        </div>

        <nav>
          <ul className={classes["help-navigation"]}>
            <li>Guest</li>
            <li>Host</li>
            <li>Experience Host</li>
            <li>Travel admin</li>
          </ul>
        </nav>

        <div className={classes['login-signup']}>
          <div>
            <h3>We&apos;re here for you</h3>
            <p>Log in to get help with your reservations, account, and more.</p>
          </div>

          <button>Log in or sign up</button>
        </div>
    </section>
  );
};

export default HelpHero;
