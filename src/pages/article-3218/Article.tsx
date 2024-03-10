import ArticleNavbar from "../article-169/components/navbar/Navbar";
import BackToTop from "../../components/back-to-top/BackToTop";
import HelperFooter from "../help/components/footer/HelpFooter";
import HeroContent from "./components/hero-content/HeroContent";
import ListOfArticles from "./components/list-of-articles/ListOfArticles";
import { useEffect } from "react"

const Article3218 = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <>
      <ArticleNavbar />
      <HeroContent />
      <ListOfArticles />
      <HelperFooter />
      <BackToTop />
    </>
  );
};

export default Article3218;
