import classes from "./fixed-header.module.scss";
import useHeight from "../../../../hooks/useCurrentHeight";
import useAccomodation from "../../../../hooks/useAccomodation";
import { Link, useParams } from "react-router-dom";
import Currency from "../../../../components/currency-formatter/Currency";
import { BiChevronLeft } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";

const FixedHeader = () => {
  const { id } = useParams();
  const smallHeight = useHeight(200);
  const largeHeight = useHeight(1700);

  const { accomodation } = useAccomodation(Number(id));
  const price = accomodation.map((acc) => acc.price).join("");

  return (
    <>
      {/* --------- Desktop View ------------------ */}
      <header
        className={`${classes["fixed-header"]} ${
          smallHeight ? classes["active"] : ""
        }`}
      >
        <div className={classes["fixed-header-wrapper"]}>
          <div className={classes.lists}>
            <li>Photos</li>
            <li>Amenities</li>
            <li>Reviews</li>
            <li>Location</li>
          </div>

          <div
            className={`${classes["right-price"]} ${
              largeHeight ? classes["right-price-active"] : ""
            }`}
          >
            <div className={classes.right}>
              <div className={classes.price}>
                <Currency value={price} />
                <span>night</span>
              </div>

              <span className={classes["reviews"]}>2 reviews</span>
            </div>
            <button>Reserve</button>
          </div>
        </div>
      </header>

      {/* -------------- Mobile View --------------- */}
      <section className={classes["mobile-fixed-header"]}>
        <div className={classes.child}>
          <div>
            <Link to="/"><BiChevronLeft size={25} color="#000" /></Link>
            <h6>Home</h6>
          </div>

          <div>
            <CiShare2 size={20} />
            <IoIosHeartEmpty size={20} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FixedHeader;
