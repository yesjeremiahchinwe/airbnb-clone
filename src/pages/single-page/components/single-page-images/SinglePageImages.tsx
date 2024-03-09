import { AccomodationType } from "../../../../lib/accomodation-data";
import classes from "./single-page-images.module.scss";
import singleOne from "/assets/single-one.webp";
import singleTwo from "/assets/single-two.webp";
import singleThree from "/assets/single-three.webp";
import { CiShare2 } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoExpandOutline } from "react-icons/io5";

interface Props {
  accom: AccomodationType;
}

const SinglePageImages = ({ accom }: Props) => {
  return (
    <div>
      <div className={classes.head}>
        <h3>{accom.location}</h3>

        <div className={classes["share-save"]}>
          <div>
            <CiShare2 />
            <span>Share</span>
          </div>

          <div>
            <IoIosHeartEmpty />
            <span>Save</span>
          </div>
        </div>
      </div>

      <div className={`${classes["images-container"]}`}>
        <div className={classes["wrapper"]}>
          {accom.images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt="House"
              className={`${classes.first} ${
                img.id === 1 ? classes.active : classes["hide"]
              }`}
            />
          ))}
          <div className={classes.shadow} />
        </div>

        <div className={`${classes["single-images"]}`}>
          <div className={classes["img-box"]}>
            <img src={singleThree} alt="" />
            <div className={classes.shadow} />
          </div>

          <div className={classes["img-box"]}>
            <img src={singleOne} alt="" className={classes['border-top']} />
            <div className={classes.shadow} />
          </div>

          <div className={classes["img-box"]}>
            <img src={singleTwo} alt="" />
            <div className={classes.shadow} />
          </div>

          <div className={classes["img-box"]}>
            <img src={singleOne} alt="" className={classes['border-bottom']}  />
            <div className={classes.shadow} />
          </div>

          <div className={classes["show-all"]}>
            <IoExpandOutline />
            <span>Show all photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageImages;
