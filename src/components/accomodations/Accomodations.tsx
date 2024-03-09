import accomodationData from "../../lib/accomodation-data";
import Apartment from "../accomodation/Accomodation";
import FilterOption from "../filter-option/FilterOption";
import classes from "./accomodations.module.scss";

const Accomodation = () => {
  return (
    <>
      <div className={classes.filtered}>
        <FilterOption />
      </div>
      <div className={classes["accomodations"]}>
        {accomodationData.map((accom) => (
          <Apartment key={accom.id} accomodation={accom} />
        ))}
      </div>

      <div className={classes["load-more"]}>
        <h4>Continue Exploring Islands</h4>
        <button>Load More</button>
      </div>
    </>
  );
};

export default Accomodation;
