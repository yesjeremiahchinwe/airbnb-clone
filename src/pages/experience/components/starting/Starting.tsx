import { BsStarFill } from "react-icons/bs";
import classes from "./start.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import starters from "../../../../lib/starter";

const Starting = () => {
  return (
    <section className={classes["start_container"]}>
      <h2>
        Starting in the next 6 hours
        
        <span>
          Scroll for more
          <BiChevronRight size={25} />
        </span>
      </h2>

      <div className={classes["lists_of_items"]}>
        {starters.map((data) => (
          <div key={data.id} className={classes.item}>
            <img src={data.image} alt={data.title} />

            <div className={classes.like}>
              <FaRegHeart size={18} color="#000" />
            </div>

            <div>
              <div className={classes["rate_location"]}>
                <BsStarFill size={10} />
                <span>{data.rating}</span>
                <span>({data.rate_count})</span>
                <span className={classes.dot}></span>
                <span>{data.location}</span>
              </div>

              <h5>{data.title}</h5>
              <p>
                <span>From ${data.price} /</span> person
              </p>

              <div className={classes.dates}>
                {data.start && (
                  <div>
                    <h6>{data.start}</h6>
                  </div>
                )}

                {data.end && (
                  <div>
                    <h6>{data.end}</h6>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Starting;
