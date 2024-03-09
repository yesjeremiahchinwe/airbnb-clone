import imgOne from "/news/news_middle.webp";
import imgTwo from "/news/news_middle_two.webp";
import classes from "./follow.module.scss";

import { FaXTwitter, FaSquareInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FollowAirbnb = () => {
  return (
    <section className={classes["follow_airbnb"]}>
      <div className={classes.wrapper}>
        <div className={classes["news_box"]}>
          <h4>Follow Airbnb for news and travel inspiration</h4>

          <div className={classes["social_buttons"]}>
            <div>
              <Link to="#">
                <FaXTwitter size={20} color="#000" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <FaSquareInstagram size={20} color="#000" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <FaLinkedinIn size={20} color="#000" />
              </Link>
            </div>
          </div>
        </div>

        <div className={`${classes["news_box"]} ${classes['second_order']}`}>
          <img src={imgOne} alt="A man and a lady sitting at a swimming pool" />
        </div>

        <div className={classes["news_box"]}>
          <img
            src={imgTwo}
            alt="A man sitting on the tairs looking at the camera"
          />
        </div>

        <div className={classes["news_box"]}>
          <h4>
            Hear more from <span>Co-founder</span> and CEO Brian Chesky
          </h4>
          <button className={classes["learn_more"]}>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default FollowAirbnb;
