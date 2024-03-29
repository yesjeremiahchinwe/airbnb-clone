import NewsHero from "./components/hero/NewsHero"
import LatestNews from "./components/latest-news/LatestNews"
import FollowAirbnb from "./components/follow-airbnb/FollowAirbnb"
import NewsList from "./components/newsList/NewsList"
import Founders from "./components/founders/Founders"
import { useEffect } from "react"

const News = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])
  
  return (
    <>
        <NewsHero />
        <LatestNews />
        <FollowAirbnb />
        <NewsList />
        <Founders />
    </>
  )
}

export default News