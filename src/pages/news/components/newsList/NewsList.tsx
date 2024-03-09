import useNews from "../../../../hooks/useNews/useNews";
import newsData from "../../../../lib/news";
import classes from "./newsList.module.scss";

const NewsList = () => {
  const news = useNews(newsData, "later");

  return (
    <section className={classes["news_list_container"]}>
      <h3>News by topic</h3>
      <div className={classes["news_navigate"]}>
        <div>All</div>
        <div>Companany</div>
        <div>Stays</div>
        <div>Product</div>
        <div>Policy</div>
        <div>Community</div>
        <div>Airbnb.org</div>
      </div>
      {news}

      <div className={classes["more_button"]}>
        <button className={classes["view_more"]}>View more</button>
      </div>
    </section>
  );
};

export default NewsList;
