import useExperience from "../../../../hooks/useExperience/useExperience";
import weekends from "../../../../lib/weekend";
import classes from "../../experience.module.scss";

const Weekend = () => {
  const weekend = useExperience(weekends, "Make plans this weekend");

  return (
    <>
      {weekend}
      <button className={classes["weekend_load_more"]}>Load more</button>
    </>
  );
};

export default Weekend;
