import { Link } from "react-router-dom";
import ColoredButton from "../../../../components/colored-button/ColoredButton";
import classes from "./news-hero.module.scss";
import newsHeroImage from "/news/news_hero_image.webp";

const NewsHero = () => {
  return (
    <section className={classes["news_hero_container"]}>
      <div className={classes["news"]}>
        <div className={classes["desc"]}>
          <small>March 5, 2024</small>
          <Link to="#">
            <h2>
              Stay up all night in the Hidden Library of St Paul&apos;s
              Cathedral, now on Airbnb
            </h2>
          </Link>

          <div className={classes.read}>
            <ColoredButton title="Read more" />
          </div>
        </div>

        <div className={classes["img_wrapper"]}>
          <Link to="#">
          <img src={newsHeroImage} alt="A libray with books in the sheve" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
