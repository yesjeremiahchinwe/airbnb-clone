import { BiChevronDown } from "react-icons/bi";
import { AccomodationType } from "../../../../lib/accomodation-data";
import Currency from "../../../../components/currency-formatter/Currency";
import classes from "./prices-fees.module.scss";

const PricesAndFees = ({ accom }: { accom: AccomodationType }) => {

  return (
    <section className={classes["prices-fees-container"]}>
      <div className={classes.price}>
        <Currency value={accom.price} />
        <span>night</span>
      </div>

      <div className={classes["check-in-out-wrapper"]}>
        <div className={classes["check-in-out"]}>
          <div>
            <h6>CHECK-IN</h6>
            <p>Add date</p>
          </div>

          <div>
            <h6>CHECKOUT</h6>
            <p>Add date</p>
          </div>
        </div>

        <div className={classes["guests"]}>
          <div>
            <h6>GUESTS</h6>
            <p>2 guests</p>
          </div>

          <BiChevronDown size={30} />
        </div>
      </div>

      <button>Check availablility</button>
    </section>
  );
};

export default PricesAndFees;
