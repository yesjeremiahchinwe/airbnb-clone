import BackToTop from "../../components/back-to-top/BackToTop";
import HelperFooter from "../help/components/footer/HelpFooter";
import ArticleHero from "./components/hero/ArticleHero";
import ArticleNavbar from "./components/navbar/Navbar";

const Article = () => {
  
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
