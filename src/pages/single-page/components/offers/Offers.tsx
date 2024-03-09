import classes from "./offers.module.scss";
import { FaWater } from "react-icons/fa";
import { TbToolsKitchen3, TbGardenCart } from "react-icons/tb";
import { MdOutlinePool, MdOutlinePets } from "react-icons/md";
import { PiTelevisionSimpleLight, PiBathtub } from "react-icons/pi";
import { IoWifiOutline } from "react-icons/io5";


const Offers = () => {
  return (
    <section className={classes["offers-container"]}>
      <h3>What this place offers</h3>

      <div className={classes['offers-wrapper']}>
        <div className={classes.offers}>
          <div className={classes.offer}>
            <FaWater size={20} />
            <h6>See view</h6>
          </div>

          <div className={classes.offer}>
            <TbToolsKitchen3 size={20} />
            <h6>Kitchen</h6>
          </div>

          <div className={classes.offer}>
            <MdOutlinePool size={20} />
            <h6>Private outdoor pool</h6>
          </div>

          <div className={classes.offer}>
            <PiTelevisionSimpleLight size={20} />
            <h6>TV</h6>
          </div>

          <div className={classes.offer}>
            <PiBathtub size={20} />
            <h6>Bathtub</h6>
          </div>
        </div>

        <div className={classes.offers}>
          <div className={classes.offer}>
            <IoWifiOutline size={20} />
            <h6>Wifi</h6>
          </div>

          <div className={classes.offer}>
            <TbGardenCart size={20} />
            <h6>Garden view</h6>
          </div>

          <div className={classes.offer}>
            <MdOutlinePets size={20} />
            <h6>Pets allowed</h6>
          </div>

          <div className={classes.offer}>
            <PiTelevisionSimpleLight size={20} />
            <h6>TV</h6>
          </div>

          <div className={classes.offer}>
            <PiBathtub size={20} />
            <h6>Bathtub</h6>
          </div>
        </div>
      </div>

      <button>Show all 53 amenities</button>
    </section>
  );
};

export default Offers;
