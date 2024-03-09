import { Link } from "react-router-dom";
import classes from "./explore.module.scss";
import explore from "/assets/explore.png";
import exploreTwo from "/assets/explore_two.png";

interface ExploresTypes {
  id: number;
  heading: string;
  para: string;
  image: string;
}

const ExploreMore = () => {
  const explores: ExploresTypes[] = [
    {
      id: 1,
      heading: "Our community policies",
      para: "How we build a foundation of trust",
      image: explore,
    },
    {
      id: 2,
      heading: "Safety tips and guidelines",
      para: "Resources to help travelers stay safe",
      image: exploreTwo,
    },
  ];

  return (
    <section className={classes["explore-container"]}>
      <div className={classes.wrapper}>
        <h2>Explore more</h2>

        <div className={classes.wrap}>
          <div className={classes.explores}>
            {explores.map((explore) => (
              <Link to="#" key={explore.id} className={classes.explore}>
                <img src={explore.image} alt={explore.heading} />

                <div className={classes.content}>
                  <h5>{explore.heading}</h5>
                  <p>{explore.para}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className={classes["get_in_touch"]}>
            <h3>Need to get in touch?</h3>
            <p>
              We&apos;ll start with some questions and get you to the right
              place.
            </p>

            <button>Contact us</button>
            <p>You can also <Link to="#">give us feedback.</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
