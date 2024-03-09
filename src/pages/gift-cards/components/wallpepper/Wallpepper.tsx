import { Link } from "react-router-dom";
import classes from "./wallpepper.module.scss";

const Wallpepper = () => {
  return (
    <section>
      <div className={classes["wallpepper-container"]}>
        <div className={classes.wrap}>
          <div>
            <h2>A key to the world</h2>
            <h2>of Airbnb</h2>
          </div>
        </div>
      </div>

      <div className={classes.corperate}>
        <h3>Corporate gift cards</h3>

        <div>
          <h5>Give your customers and employees the gift of travel.</h5>
          <Link to="#">Learn more</Link>
        </div>
      </div>
    </section>
  );
};

export default Wallpepper;
