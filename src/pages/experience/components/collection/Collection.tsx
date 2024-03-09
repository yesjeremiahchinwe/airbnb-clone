import classes from "./collection.module.scss";
import collections from "../../../../lib/collections";
import NavigateExperience from "../navigation/NavigateExperience";
import { BiChevronRight } from "react-icons/bi";

const Collection = () => {
  return (
    <section className={classes["collection_container"]}>
      <h2>
        New this week
        <span>
          Scroll for more
          <BiChevronRight size={25} />
        </span>
      </h2>

      <div className={classes.collections}>
        {collections.map((collection) => (
          <div key={collection.id} className={classes.collection}>
            <img src={collection.image} alt={collection.title} />

            <div className={classes.content}>
              <div>
                <small>Collection</small>
                <h5>{collection.title}</h5>
              </div>

              <button>Show all</button>
            </div>
          </div>
        ))}
      </div>

      <div className={classes["navigate_desktop"]}>
        <div className={classes["outline_filters"]}>
          <div>
            <p>Dates</p>
          </div>
          <div>
            <p>Group size</p>
          </div>
          <div>
            <p>More filters</p>
          </div>
        </div>

        <NavigateExperience />
      </div>
    </section>
  );
};

export default Collection;
