import { useState } from "react";
import classes from "./filter-option.module.scss";

const FilterOption = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes["filter-button"]}>
      {/* @ts-ignore */}
      <nobr>Display total before taxes</nobr>

      <div
        className={`${classes["check-box"]} ${
          checked ? classes["checked"] : ""
        }`}
        onClick={() => setChecked((prev) => !prev)}
      >
        <div className={classes["box"]}></div>
      </div>
    </div>
  );
};

export default FilterOption;
