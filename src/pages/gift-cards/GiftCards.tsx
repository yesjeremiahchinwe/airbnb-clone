import FQA from "./components/FQA/FQA";
import GiftCardFixedFooter from "./components/fixed-footer/GiftCardFixedFooter";
import GiftCardFooter from "./components/footer/Footer";
import GiftCardNavbar from "./components/giftcard-navbar/GiftCardNavbar";
import Hero from "./components/hero/Hero";
import Lists from "./components/lists/Lists";
import Wallpepper from "./components/wallpepper/Wallpepper";
import classes from "./gifts-cards.module.scss";

const GiftCards = () => {
  return (
    <>
      <GiftCardNavbar />
      <Hero />
      
      <section className={classes["overall_container"]}>
        <Lists />
        <Wallpepper />
        <FQA />
        <GiftCardFooter />
        <GiftCardFixedFooter />
      </section>
    </>
  );
};

export default GiftCards;
