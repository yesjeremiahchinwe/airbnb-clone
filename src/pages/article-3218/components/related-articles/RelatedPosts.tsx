import { Link } from "react-router-dom";
import classes from "./related.module.scss";

interface TopArticlesType {
  id: number;
  title: string;
  parag: string;
  category?: string;
}

const RelatedPosts = () => {
  const topArticles: TopArticlesType[] = [
    {
      id: 1,
      title: "Get help or contact Airbnb Support",
      parag:
        "Most Hosts and guests are able to quickly resolve issues on their own. Explore ways to get the help you need before, during, or after a trip.",
      category: "Guest",
    },
    {
      id: 2,
      title: "If your Host cancels your reservation",
      parag:
        "If your reservation is canceled by your Host, we will automatically give you a full refund. If the cancellation happens within 30 days of your.",
        category: "Guest"
    },
    {
      id: 3,
      title: "If you have a problem or issue during your stay",
      parag: "If anything unexpected comes up during your stay, message your Host to discuss a solution first. It is likely that they will be able to help yo….",
      category: "Guest",
    },
  ];

  return (
    <section className={classes["related_posts_container"]}>
      <h3>Related Articles</h3>

      <div className={classes["related_top_articles"]}>
        {topArticles.map((article) => (
          <div key={article.id}>
            <h5>{article.category}</h5>

            <Link to="#">
              <h6>{article.title}</h6>
              <p>{article.parag}..</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
