import classes from "./media-hero.module.scss";
import { BiSearch } from "react-icons/bi";

const MediaHero = () => {
  return (
    <section className={classes["news_hero_container"]}>
      <div className={classes["news"]}>
        <div className={classes["desc"]}>
            <h2>Media assets</h2>
            <p>By using this Site, I agree to its Terms & Conditions. All content downloaded from the Site (photography, audio and video, etc.) may be used for editorial purposes only. Any other use of Site content including, without limitation personal or commercial use, is strictly prohibited.</p>
        </div>

        <div className={classes["search_wrapper"]}>
          <input type="text" placeholder="Search media assets" />
          <span><BiSearch size={20} /></span>
        </div>
      </div>
    </section>
  );
};

export default MediaHero;
