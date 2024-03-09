import { Link } from "react-router-dom";
import classes from "./list-of-articles.module.scss";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";
import RelatedPosts from "../related-articles/RelatedPosts";

const ListOfArticles = () => {
  return (
    <section className={classes["list_of_articles_container"]}>
      <div className={classes.wrapper}>
        <h5>In this article</h5>
        <h6>
          <BsFillBookmarkFill size={11} /> Host cancellations
        </h6>
        <h6>
          <BsFillBookmarkFill size={11} /> Unable to check-in
        </h6>
        <h6>
          <BsFillBookmarkFill size={11} /> Inaccurate listings
        </h6>
        <h6>
          <BsFillBookmarkFill size={11} /> 24-hour safety line
        </h6>
        <h6>
          <BsFillBookmarkFill size={11} /> How AirCover for guests works
        </h6>
      </div>

      <div className={classes.wrapper}>
        <h4>Host cancellations</h4>
        <p>
          If your Host cancels within 30 days of check-in, we&apos;ll help you
          find a similar place, depending on availability at comparable pricing.
          If a similar place isn&apos;t available or you&apos;d prefer not to
          rebook, we&apos;ll give you a refund.
        </p>

        <p>
          Learn more about what to expect{" "}
          <Link to="#">if your Host cancels your reservation</Link>.
        </p>
      </div>

      <div className={classes.wrapper}>
        <h4>Unable to check-in</h4>
        <p>
          When you have a confirmed reservation, you&apos;ll have your
          Host&apos;s email and phone number in the message thread for your
          trip. If you can&apos;t get into your Airbnb on arrival, your Host
          doesn&apos;t respond or can&apos;t resolve the issue, we&apos;ll help
          you find a similar place, depending on availability at comparable
          pricing. If a similar place isn&apos;t available or you&apos;d prefer
          not to rebook, we&apos;ll give you a refund.{" "}
        </p>

        <p>
          Check out what to do next{" "}
          <Link to="#">if you can&apos;t get in touch with your Host</Link>.
        </p>
      </div>

      <div className={classes.wrapper}>
        <h4>Inaccurate listings</h4>
        <p>
          If the listing is different than advertised, your Host is a great
          resource to fix the issue. If the listing is significantly different
          than advertised and your Host can&apos;t resolve the issue, we&apos;ll
          help you find a similar place, depending on availability at comparable
          pricing. If a similar place isn&apos;t available or you&apos;d prefer
          not to rebook, we&apos;ll give you a full or partial refund.
        </p>
      </div>

      <div className={classes.wrapper}>
        <h4>24-hour safety line</h4>
        <p>
          If you ever feel unsafe, we're here to help you get priority access to
          specially trained safety agents who will assist you with your safety
          issues or directly connect you to local emergency authorities, day or
          night.
        </p>

        <p>
          Need to reach us? <Link to="#">Contact us</Link> by phone, email, or
          chat.
        </p>
      </div>

      <div className={classes.wrapper}>
        <h4>How AirCover for guests works</h4>
        <p>
          AirCover for guests provides support for serious issues with your
          booking (e.g. Host cancellation within 30 days of check-in) or during
          your stay (e.g. the heat going out in winter, the listing has fewer
          bedrooms than listed, it&apos;s a different type of home—a private
          room instead of an entire home, a major advertised amenity such as a
          pool or kitchen is missing) but it doesn&apos;t include more minor
          inconveniences, like a broken toaster.
        </p>

        <p>
          Your Host is your best point of contact to reach out to if anything
          comes up. You can <Link to="#">message your Host</Link> directly from
          your inbox to let them know what&apos;s going on.
        </p>

        <p>If an issue does come up during your stay:</p>

        <ol>
          <li>Take photos or videos of the issue, if you can.</li>

          <li>
            Contact your Host within 72 hours of discovering the problem and
            describe the issue to them to see if they can resolve it.
          </li>

          <li>
            If your Host can&apos;t resolve the issue or doesn't respond at all,{" "}
            <Link to="#">contact us</Link> as soon as possible.
          </li>

          <li>
            We&apos;ll review it and if we find it&apos;s an issue that&apos;s
            supported by AirCover for guests and you&apos;d like to leave the
            place, we&apos;ll help you find a similar place to stay, depending
            on availability at comparable pricing. If a similar place isn&apos;t
            available or you&apos;d prefer not to rebook, we&apos;ll give you a
            full or partial refund.
          </li>
        </ol>

        <div className={classes.disclaimer}>
          <FaFile size={30} color="#E07912" />
          <p>
            AirCover for guests is not an insurance policy. It doesn&apos;t
            cover travel related issues (e.g. your trip is delayed due to a
            storm, your luggage is damaged by your carrier). Learn more{" "}
            <Link to="#">here</Link>.
          </p>
        </div>

        <p>
          If you&apos;re a Host, learn more about{" "}
          <Link to="#">AirCover for Hosts</Link> and{" "}
          <Link to="#">recent improvements</Link> we've made.
        </p>

        <div className={classes.helpQuestion}>
          <h6>Did this article help?</h6>
          <div>
            <span>Yes</span>
            <span>No</span>
          </div>
        </div>
      </div>

      <div className={classes.wrapper}>
        <RelatedPosts />
      </div>
    </section>
  );
};

export default ListOfArticles;
