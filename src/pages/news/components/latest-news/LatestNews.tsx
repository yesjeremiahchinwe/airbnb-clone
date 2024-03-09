import useNews from "../../../../hooks/useNews/useNews";
import newsData from "../../../../lib/news";

const LatestNews = () => {
  return useNews(newsData, "latest", "Latest news");
};

export default LatestNews;
