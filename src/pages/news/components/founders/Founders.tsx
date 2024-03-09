import classes from "./founders.module.scss";
import newsFoundersImage from "/news/news_bottom.webp";

const Founders = () => {
  return (
    <section className={classes["founders_container"]}>
      <div className={classes["news"]}>
        <div className={classes["desc"]}>
          <h2>What makes Airbnb, Airbnb</h2>
          <p>A letter from our founders</p>

          <div className={classes.read}>
            <button className={classes["read_more"]}>Read more</button>
          </div>
        </div>

        <div className={classes["img_wrapper"]}>
          <img
            src={newsFoundersImage}
            alt="Three men in a room starring at a computer smiling"
          />
        </div>
      </div>
    </section>
  )
}

export default Founders;
