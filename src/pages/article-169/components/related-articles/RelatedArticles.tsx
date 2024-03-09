import { Link } from "react-router-dom";
import classes from "./related-articles.module.scss";

interface TopArticlesType {
  id: number;
  title: string;
  parag: string;
  category?: string;
}

const RelatedArticles = () => {
  const topArticles: TopArticlesType[] = [
    {
      id: 1,
      title: "Find your Host's cancellation policy",
      parag:
        "The amount of any refund depends on the Host's cancellation policy and the time and date you cancel.",
      category: "Guest",
    },
    {
      id: 2,
      title: "How cancellations work",
      parag:
        "Sometimes things come up and you have to cancel. To keep things running smoothly, here is how you can cancel a reservation.",
    },
    {
      id: 3,
      title: "Find your refund amount",
      parag:
        "The amount of your refund depends on your reservation's cancellation policy and when you cancel.",
      category: "Guest",
    },
  ];

  return (
    <section className={classes["related_articles-container"]}>
      <h3>Related Articles</h3>

      <div className={classes["top_articles"]}>
        {topArticles.map((article) => (
          <div key={article.id}>
            <h5>{article.category}</h5>

            <Link to="#">
              <h6>{article.title}</h6>
              <p>{article.parag}...</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
