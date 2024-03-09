import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Home from "./pages/home/Home"
import SinglePage from "./pages/single-page/SinglePage"
import GiftCards from "./pages/gift-cards/GiftCards"
import Help from "./pages/help/Help"
import Article from "./pages/article-169/Article"
import HelpLayout from "./pages/help/components/layout/HelpLayout"
import Article3218 from "./pages/article-3218/Article"
import AllTopics from "./pages/all-topics/AllTopics"
import Experience from "./pages/experience/Experience"
import News from "./pages/news/News"
import NewsLayout from "./pages/news/components/layout/Layout"
import MediaAssets from "./pages/media-assets/MediaAssets"


const router =  createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: ":id", 
        element: <SinglePage />
      },
      {
        path: "giftcards",
        element: <GiftCards />
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {
            index: true,
            element: <Help />
          },
          {
            path: "article/169",
            element: <Article />
          },
          {
            path: "article/3218",
            element: <Article3218 />
          },
          {
            path: "all-topics",
            element: <AllTopics />
          }
        ]
      },
      {
        path: "experiences",
        element: <Experience />
      },
      {
        path: "news",
        element: <NewsLayout />,
        children: [
          {
            index: true,
            element: <News />
          },
          {
            path: "media-assets",
            element: <MediaAssets />
          }
        ]
      }
    ]
  }
])

export default router
