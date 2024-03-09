import classes from "./bedrooms.module.scss";
import { LuBedSingle } from "react-icons/lu";

const Bedrooms = () => {
  const bedrooms = [
    {
      id: 1,
      title: "Bedroom 1",
      feature: "1 double bed",
      images: [{ id: 1, src: <LuBedSingle size={25} /> }],
    },
    {
      id: 2,
      title: "Bedroom 2",
      feature: "1 double bed, 1 futon bed",
      images: [
        { id: 1, src: <LuBedSingle size={25}  /> },
        { id: 2, src: <LuBedSingle size={25}  /> },
      ],
    },
    {
      id: 3,
      title: "Bedroom 3",
      feature: "1 double bed, 1 futon bed",
      images: [
        { id: 1, src: <LuBedSingle size={25}  /> },
        { id: 2, src: <LuBedSingle size={25}  /> },
      ],
    },
  ];

  return (
    <div className={classes["where-to-sleep"]}>
      <h5>Where you&apos;ll sleep</h5>

      <div className={classes.bedrooms}>
        {bedrooms.map((bedroom) => (
          <div key={bedroom.id} className={classes.bedroom}>
            <div className={classes["bed-images"]}>
              {bedroom.images.map((img) => (
                <span key={img.id}>{img.src}</span>
              ))}
            </div>

            <h5>{bedroom.title}</h5>
            <p>{bedroom.feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bedrooms;
