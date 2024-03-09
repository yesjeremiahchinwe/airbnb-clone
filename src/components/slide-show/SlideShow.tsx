import { useState } from "react";
import { MenuDataType } from "../../lib/menu-data";
import classes from "./slide.module.scss";

interface Props {
  images: MenuDataType;
  index: number;
}

const SlideShow = ({ images, index }: Props) => {
  const [active, setActive] = useState(0);

  return (
    <section
      className={classes.section}
      onClick={() => setActive(Number(images.id))}
    >
      <div key={images.id} className={`${classes.slide}`}>
        <img src={images.src} alt={images.title} />
       
        <p className={active === index ? classes['active'] : ""}>
           {/* @ts-ignore */}
          <nobr>
          {images.title}
             {/* @ts-ignore */}
          </nobr>
        </p>
      </div>
    </section>
  );
};

export default SlideShow;
