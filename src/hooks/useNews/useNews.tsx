import { NewsType } from "../../lib/news";
import classes from "./useNews.module.scss";

const useNews = (news: NewsType[], filterString: string, heading?: string) => {
  const filteredNews = news.filter((data) => data.type === filterString);

  return (
    <section className={classes["custom_news_hook"]}>
      <h3>{heading}</h3>

      <div className={classes.wrapper}>
        {filteredNews.map((data) => (
          <div key={data.id} className={classes["news_box"]}>
            <img src={data.image} alt={data.title} />

            <div>
              <h4
                className={filterString === "latest" ? classes["big_font"] : ""}
              >
                {data.title}
              </h4>
              <small>{data.date}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default useNews;
