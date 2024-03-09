import { AccomodationType } from "../../../../lib/accomodation-data";
import PricesAndFees from "../prices-fees/PricesAndFees";
import classes from "./details.module.scss";
import { IoIosStar } from "react-icons/io";
import {
  MdOutlineBusinessCenter,
  MdHomeWork,
  MdOutlineDateRange,
} from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import Bedrooms from "../bedrooms/Bedrooms";
import Offers from "../offers/Offers";


const SinglePageDetails = ({ accom }: { accom: AccomodationType }) => {
  return (
    <section className={classes["single-page-details-wrapper"]}>
        <div className={classes.page}>
          <h4>{accom.location}</h4>
          <h5>Entire home in Marbella, Spain</h5>

          <div className={classes["room-features"]}>
            <span>10 guests</span> <span className={classes.dot}>.</span>
            <span>4 bedrooms</span> <span className={classes.dot}>.</span>
            <span>3 beds</span> <span className={classes.dot}>.</span>
            <span>4.5 baths</span>
          </div>

          <div className={classes.reviews}>
            <IoIosStar size={17} />
            <span>2 reviews</span>
          </div>

          <div className={classes["more-details"]}>
            <div className={classes["details-box"]}>
              <MdOutlineBusinessCenter size={25} />
              <div>
                <h6>Hosted by Axel</h6>
                <p>2 years hosting</p>
              </div>
            </div>

            <div className={classes["details-box"]}>
              <MdHomeWork size={25} />
              <div>
                <h6>Dedicated workspace</h6>
                <p>A room with wifi that&apos;s well-suited for working.</p>
              </div>
            </div>

            <div className={classes["details-box"]}>
              <GiNetworkBars size={25} />
              <div>
                <h6>Dive right in</h6>
                <p>This is one of the few places in the area with a pool.</p>
              </div>
            </div>

            <div className={classes["details-box"]}>
              <MdOutlineDateRange size={25} />
              <h6>Free cancellation for 48 hours</h6>
            </div>

            <div className={classes["informations"]}>
              <p>
                Fulfill a dream for you and your family and spend unforgettable
                vacations in privacy and with fantastic sea panorama on the
                island Otok Olipa.
              </p>

              <div>
                <h5>The space</h5>
                <p>
                  Fulfill a dream for you and your family and spend
                  unforgettable vacations in privacy and with fantastic sea
                  panorama on the island Otok Olipa.
                </p>

                <Link to="">
                  Show more <BiChevronRight size={25} />
                </Link>
              </div>
            </div>

            <Bedrooms />
            <Offers />
          </div>
        </div>

      <PricesAndFees accom={accom} />
    </section>
  );
};

export default SinglePageDetails;
