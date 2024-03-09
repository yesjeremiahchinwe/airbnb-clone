import orgon from "/assets/orgon.webp";
import classes from "./host.module.scss";
import { IoIosStar } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";


const Host = () => {
  return (
    <section className={classes["host-container"]}>
      <div className={classes.host}>
        <img src={orgon} alt="Orgon Tourist Agency" />

        <div>
          <h5>Hosted by Orgon Tourist Agency</h5>
          <p>Joined in August 2014</p>
        </div>
      </div>

      <div className={classes.info}>
        <div>
          <div className={classes["personal-info"]}>
            <div>
              <IoIosStar size={18} />
              <h6>170 Reviews</h6>
            </div>

            <div>
              <MdVerifiedUser size={18} />
              <h6>Identity verified</h6>
            </div>
          </div>
          <p>Orgon Luxury Croatian Villas</p>
        </div>

        <div>
            <p>Language: English</p>
            <p>Response rate: 100%</p>
            <p>Response time: within an hour</p>

            <button>Contact Host</button>

            <div className={classes.disclaimer}>
                <IoWarningOutline size={30} />
                <span>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
