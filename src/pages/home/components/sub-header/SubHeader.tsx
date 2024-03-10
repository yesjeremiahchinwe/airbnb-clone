import { BiSearch } from "react-icons/bi";
import classes from "./sub-header.module.scss";
import Button from "../../../../components/button/Button";
import { useContext } from "react";
import ClickContext from "../../../../context/context";

const SubHeader = () => {
  const { selected } = useContext(ClickContext);

  return (
    <>
      {/* ---------- Desktop View -------------- */}
      <div className={classes["buttons-mobile"]}>
        <Button title="Stays"></Button>
        <Button title="Experiences"></Button>
        <Button title="Online Experience"></Button>
      </div>

      <section className={classes["sub-header-wrapper"]}>
        <div className={`${classes.filter}`}>
          <h6>Where</h6>
          <p>Search destiniations</p>
        </div>

        <div className={classes.divider} />

        {selected === 0 ? (
          <>
            <div className={classes.filter}>
              <h6>Check in</h6>
              <p>Add dates</p>
            </div>

            <div className={classes.divider} />

            <div className={classes.filter}>
              <h6>Check out</h6>
              <p>Add dates</p>
            </div>
          </>
        ) : (
          <div className={classes.filter}>
            <h6>Date</h6>
            <p>Add dates</p>
          </div>
        )}

        <div className={classes.divider} />

        <div className={classes["search"]}>
          <div className={classes.desc}>
            <h6>Who</h6>
            <p>Add guests</p>
          </div>

          <div className={classes["search-icon"]}>
            <BiSearch size={25} color="#ffffff" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SubHeader;
