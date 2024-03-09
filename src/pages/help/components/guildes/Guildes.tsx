import { BiChevronRight } from "react-icons/bi";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaHouseDamage } from "react-icons/fa";
import { Link } from "react-router-dom";

import classes from "./guildes.module.scss";
import helpOne from "/assets/help_one.jpg";
import helpTwo from "/assets/help_two.jpg";
import helpThree from "/assets/help_three.jpg";
import helpFour from "/assets/help_four.png";

interface ArticlesTypes {
  id: number;
  title: string;
  image: string;
}

const Guildes = () => {
  const articles: ArticlesTypes[] = [
    {
      id: 1,
      title: "Getting started on Airbnb",
      image: helpOne,
    },
    {
      id: 2,
      title: "Access and manage your account",
      image: helpTwo,
    },
    {
      id: 3,
      title: "Help with a reservation",
      image: helpThree,
    },
    {
      id: 4,
      title: "AirCover for guests",
      image: helpFour,
    },
  ];

  return (
    <section className={classes["guildes-container"]}>
      <div className={classes.wrapper}>
        <h3>Guides for getting started</h3>

        <Link to="/all-topics">
          <span>Browse all topics</span>
          <BiChevronRight size={30} />
        </Link>
      </div>

      {/* ------------- Mobile View ------------- */}

      <div className={classes["articles_mobile"]}>
        <div className={classes["mobile"]}>
          <div>
            <MdOutlineWavingHand size={20} />
            <span>Getting started on Airbnb</span>
          </div>

          <BiChevronRight size={30} />
        </div>

        <div className={classes["mobile"]}>
          <div>
            <FaRegCircleUser size={20} />
            <span>Access and manage your account</span>
          </div>

          <BiChevronRight size={30} />
        </div>

        <div className={classes["mobile"]}>
          <div>
            <SlCalender size={20} />
            <span>Help with a reservation</span>
          </div>

          <BiChevronRight size={30} />
        </div>

        <div className={classes["mobile"]}>
          <div>
            <FaHouseDamage size={20} />
            <span>AirCover for guests</span>
          </div>

          <BiChevronRight size={30} />
        </div>
        <div className={classes["mobile"]}>
          <div>
            <span>Browse all topics</span>
          </div>

          <BiChevronRight size={30} />
        </div>
      </div>

      {/* --------- Destop View ------------ */}
      <div className={classes.articles}>
        {articles.map((article) => (
          <Link to="#" key={article.id}>
            <img src={article.image} alt={article.title} />
            <h5>{article.title}</h5>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Guildes;
