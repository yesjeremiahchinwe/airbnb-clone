import { Link } from "react-router-dom";
import { ImageType } from "../../lib/accomodation-data";
import classes from "./image-slider.module.scss";

interface ImageProps {
  image: ImageType;
  index: number;
  location: string;
  isActive: number;
  id: number
}

const ImageSlider = ({ image, index, id, isActive, location }: ImageProps) => {
  
  return (
    <Link to={`${id}`}>
      <img
        src={image.src}
        key={image.id}
        alt={location}
        className={`
        ${classes.image} 
        ${index === isActive ? classes["active"]: ""}
        ${index === 0 ? classes['right-slide'] : classes['left-slide']}
        `}
      />
    </Link>
  );
};

export default ImageSlider;
