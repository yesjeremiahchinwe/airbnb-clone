import mediaData from "../../../../lib/media-data";
import classes from "./media.module.scss";

const Media = () => {
  return (
    <section className={classes["media_container"]}>
      <div className={classes.wrapper}>
        {mediaData.map((data) => (
          <div key={data.id} className={classes["news_box"]}>
            <img src={data.image} alt={data.title} />

            <div>
              <h4>{data.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Media;
