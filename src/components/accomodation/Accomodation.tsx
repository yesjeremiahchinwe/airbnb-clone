import { AccomodationType } from "../../lib/accomodation-data";
import Currency from "../currency-formatter/Currency";
import classes from "./accomodation.module.scss";
import ImageSlider from "../image-slider/ImageSlider";

import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  accomodation: AccomodationType;
}

const Apartment = ({ accomodation }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={classes["accomodation-wrapper"]}>
      <div className={classes["image-wrapper"]}>
        {accomodation.images.map((image, index) => (
          <ImageSlider
            key={image.id}
            image={image}
            index={index}
            isActive={activeIndex}
            location={accomodation.location}
            id={accomodation.id}
          />
        ))}

        <div className={classes["favorite-like-wrapper"]}>
          {accomodation.favorite && (
            <div className={classes.favorite}>
              <p>Guest favorite</p>
            </div>
          )}

          <div className={classes.like}>
            <FaRegHeart size={20} color="#fff" />
          </div>
        </div>

        <div className={classes["navigation-buttons"]}>
          <button
            className={`
          ${classes.showOnHover}
          ${activeIndex === 0 ? classes["hide-left"] : ""}
          `}
            onClick={() => setActiveIndex((prev) => prev - 1)}
          >
            <span><FaChevronLeft className={classes.icon} /></span>
          </button>

          <button
            className={`
            ${classes.showOnHover} ${classes["right"]}
            ${activeIndex === 1 ? classes.hide : ""}
            `}
            onClick={() => setActiveIndex((prev) => prev + 1)}
          >
            <span><FaChevronRight className={classes.icon} /></span>
          </button>
        </div>

        <div className={classes["dot-navigation"]}>
          {accomodation.images.map((image, index) => (
            <div
              key={image.id}
              className={`
              ${classes["circle"]} 
              ${activeIndex === index ? classes["active-circle"] : ""}
            `}
            />
          ))}
        </div>
      </div>

      <div className={classes["accomodation-content"]}>
        <div className={classes.content}>
          <h4>
            <Link to={`${accomodation.id}`}>{accomodation.location}</Link>
          </h4>

          {accomodation.rating ? (
            <div className={classes["rating"]}>
              <IoIosStar size={13} />
              <span>{accomodation.rating}</span>
            </div>
          ) : (
            <div className={classes["rating"]}>
              <IoIosStar size={14} />
              <span>New</span>
            </div>
          )}
        </div>

        <p>{accomodation.description}</p>

        <p>{accomodation.date}</p>

        <div className={classes.currency}>
          <Currency value={accomodation.price} />
          <span>night</span>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
