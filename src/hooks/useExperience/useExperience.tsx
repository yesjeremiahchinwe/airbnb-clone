import { BsStarFill } from "react-icons/bs";
import classes from "./useExperience.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { OnlineExpType } from "../../lib/online-plans";

const useExperience = (children: OnlineExpType[], heading: string) => {

  return (
    <section className={classes["parent_container"]}>
      <h2>
        {heading}
        <span>
          Scroll for more
          <BiChevronRight size={25} />
        </span>
      </h2>

      <div className={classes["lists_of_items"]}>
        {children.map((data) => (
          <div key={data.id} className={classes.item}>
            <img src={data.image} alt={data.title} />

            <div className={classes.like}>
              <FaRegHeart size={18} color="#fff" />
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default useExperience;
