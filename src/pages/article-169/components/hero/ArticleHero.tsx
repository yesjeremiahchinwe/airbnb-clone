import { BiChevronRight } from "react-icons/bi";
import classes from "./article-hero.module.scss";
import { Link } from "react-router-dom";
import RelatedArticles from "../related-articles/RelatedArticles";

const ArticleHero = () => {
  return (
    <section className={classes["article-hero-container"]}>
      <button>Log in or sign up</button>

      <div className={classes.links}>
        <Link to="/help">
          Home <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/all-topics">
          All topics <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/topic/1254">
          Your reservations <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/topic/1339">
          Cancellations <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/topic/1677">
          Canceling a reservation <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help">Canceling your reservation for a stay </Link>
      </div>

      <div className={classes["hero_content"]}>
        <div>
          <h6>How-to . Guest</h6>
          <h2>Canceling your reservation for a stay</h2>
          <p>
            Your plans have changed and now you need to cancel your reservation.
            No problem. You can go to your <Link to="#">Trips</Link> to cancel or make changes to
            your reservation.
          </p>
        </div>

        <div className={classes['right_sidebar']}>
          <h5>Get help with your reservations, account, and more</h5>
          <button>Log in or sign up</button>
        </div>
      </div>

      <div className={classes.cancellation}>
        <h5>To cancel a reservation:</h5>

        <nav>
          <ul className={classes["article-navigation"]}>
            <li>Desktop</li>
            <li>iOS app</li>
            <li>Android app</li>
            <li>Mobile browser</li>
          </ul>
        </nav>

        <ol>
            <li>Click <Link to="#">Trips</Link> and select the reservation you want to cancel</li>

            <li>Under <span>Reservation details</span>, click <span>Cancel reservation</span></li>

            <li>Choose a reason for canceling</li>

            <li>Click <span>Cancel reservation</span></li>
        </ol>

        <div className={classes.refund}>
            <h5>Requesting a refund during your stay</h5>
            <p>If you&apos;re experiencing an issue during your stay, you can ask your Host to fix it, request a partial refund, or request to cancel your reservation for a full refund. It&apos;s important to submit your request within 24 hours of noticing the issue, and your Host will have 1 hour to respond. If they decline or don&apos;t respond, you can ask Airbnb to step in to help.</p>

            <div>
                <h6>Did this article help?</h6>
                <div>
                    <span>Yes</span>
                    <span>No</span>
                </div>
            </div>
        </div>

        <RelatedArticles />
      </div>
    </section>
  );
};

export default ArticleHero;
