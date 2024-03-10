import BackToTop from "../../components/back-to-top/BackToTop";
import HelperFooter from "../help/components/footer/HelpFooter";
import ArticleHero from "./components/hero/ArticleHero";
import ArticleNavbar from "./components/navbar/Navbar";
import { useEffect } from "react"

const Article = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])
  
  return (
    <>
      <ArticleNavbar />
      <ArticleHero />
      <HelperFooter />
      <BackToTop />
    </>
  );
};

export default Article;
