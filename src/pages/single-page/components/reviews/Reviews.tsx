import { IoIosStar } from "react-icons/io";
import classes from "./reviews.module.scss";
import lawrence from "/assets/lawrence.webp";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Lucas",
      location: "Germany",
      img: lawrence,
      date: "September 2022",
      review: "Great Location and great hosts!",
    },
    {
      id: 2,
      name: "Lawrence",
      location: "New York, New York",
      img: lawrence,
      date: "August 2022",
      review:
        "Incredible beautiful place with a perfect combination of privacy and access to the main island of Vis. Staff was very helpful and addressed all needs. Highly recommended!!!!!",
    },
  ];

  return (
    <section className={classes["reviews-container"]}>
      <h5>2 reviews</h5>
      <p>Average rating will appear after 3 reviews</p>

      <div className={classes.reviews}>
        {reviews.map((review) => (
          <div key={review.id} className={classes['review-box']}>
            <div className={classes['name-location']}>
              <img src={review.img} alt={review.name} />

              <div>
                <h6>{review.name}</h6>
                <p>{review.location}</p>
              </div>
            </div>

            <div>
              <div className={classes.review}>
                <div className={classes["rates-stars"]}>
                  <IoIosStar size={12} />
                  <IoIosStar size={12} />
                  <IoIosStar size={12} />
                  <IoIosStar size={12} />
                  <IoIosStar size={12} />
                </div>

                <span className={classes.date}>{review.date}</span>
                <span>Stayed a few nights</span>
              </div>

              <p className={classes['the-review']}>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
