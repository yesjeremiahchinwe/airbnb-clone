import menuData from "../../../../lib/menu-data";
import classes from "./menu.module.scss";
import SlideShow from "../../../../components/slide-show/SlideShow";
import Filter from "../../../../components/filter-button/Filter";
import FilterOption from "../../../../components/filter-option/FilterOption";

const Menu = () => {
  return (
    <section className={classes["menu_list_container"]}>
      <div className={classes.wrapper}>
        <div className={classes["menu-list"]}>
          {menuData.map((menu, index) => (
            <SlideShow key={menu.id} images={menu} index={index} />
          ))}

          {/* <div
          className={`
            ${classes["navigation"]} 
            ${classes["prev"]}
            `}
        >
          &lt;
        </div>

        <div
          className={`
          ${classes["navigation"]} 
          ${classes["next"]}
          `}
        >
          &gt;
        </div> */}
        </div>

        <div className={classes["filter-options"]}>
          <Filter />
          <div className={classes["hide_filter"]}>
            <FilterOption />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
