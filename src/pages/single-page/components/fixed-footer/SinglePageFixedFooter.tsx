import { useParams } from "react-router-dom";
import Currency from "../../../../components/currency-formatter/Currency";
import classes from "./fixed-footer.module.scss";
import useAccomodation from "../../../../hooks/useAccomodation";


const SinglePageFixedFooter = () => {
  const { id } = useParams();
  const { accomodation } = useAccomodation(Number(id));
  const price = accomodation.map((acc) => acc.price).join("")

  return (
    <div className={classes["mobile-right-price"]}>
      <div className={classes.right}>
        <div className={classes.price}>
          <Currency value={price} />
          <span>night</span>
        </div>

        <span className={classes["reviews"]}>2 reviews</span>
      </div>
      <button>Reserve</button>
    </div>
  );
};

export default SinglePageFixedFooter;
