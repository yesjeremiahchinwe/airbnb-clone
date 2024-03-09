import giftOne from "/gift-cards/gift_one.webp";
import giftTwo from "/gift-cards/gift_two.webp";
import giftThree from "/gift-cards/gift_three.webp";
import giftFour from "/gift-cards/gift_four.webp";
import giftFive from "/gift-cards/gift_five.webp";
import giftSix from "/gift-cards/gift_six.webp";
import classes from "./lists.module.scss";

const Lists = () => {
  return (
    <section className={classes["gift-cards-list-container"]}>
      <div className={classes.wrapper}>
        <div className={classes.headings}>
          <h3>Easy to give. Easy to love.</h3>
          <h3>Never expires.</h3>
        </div>

        <div className={classes["gift-cards-images"]}>
          <img src={giftOne} alt="Gift Card" />
          <img src={giftTwo} alt="Gift Card" />
          <img src={giftThree} alt="Gift Card" />
          <img src={giftFour} alt="Gift Card" />
          <img src={giftFive} alt="Gift Card" />
          <img src={giftSix} alt="Gift Card" />
        </div>
      </div>
    </section>
  );
};

export default Lists;
