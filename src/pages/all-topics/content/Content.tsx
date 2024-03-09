import { BiChevronRight } from "react-icons/bi"
import classes from "./content.module.scss"
import { Link } from "react-router-dom"


const Content = () => {

  return (
    <section className={classes['all_topics_container']}>
        <div className={classes.links}>
        <Link to="/help">
          Home <BiChevronRight size={19} color="#717171" />
        </Link>

        <Link to="/help/all-topics">
          All topics
        </Link>
        </div>

        <h2>All topics</h2>
        <p>Browse our full library of help topics.</p>

        <nav>
          <ul className={classes["article-navigation"]}>
            <li>Guest</li>
            <li>Host</li>
            <li>Experience Host</li>
            <li>Travel admin</li>
          </ul>
        </nav>

        <div className={classes.contents}>
            <div>
                <h3>Searching and booking</h3>
                <div className={classes.allLinks}>
                    <Link to="#">Search tips</Link>
                    <Link to="#">Booking places to stay</Link>
                    <Link to="#">Booking Airbnb Experiences</Link>
                    <Link to="#">Booking business travel and events</Link>
                    <Link to="#">Booking Airbnb.org stays</Link>
                    <Link to="#">Messaging</Link>
                    <Link to="#">Travel insurance and reservation insurance</Link>
                </div>
            </div>

            <div>
                <h3>Your reservations</h3>
                <div className={classes.allLinks}>
                    <Link to="#">Reservation status</Link>
                    <Link to="#">Changes</Link>
                    <Link to="#">Cancellations</Link>
                    <Link to="#">Checking in</Link>
                    <Link to="#">Checking out</Link>
                    <Link to="#">Preparing for an Airbnb Experience</Link>
                    <Link to="#">Troubleshooting</Link>
                </div>
            </div>

            <div>
                <h3>Payments, pricing, and refunds</h3>
                <div className={classes.allLinks}>
                    <Link to="#">Paying for a reservation</Link>
                    <Link to="#">Refunds</Link>
                    <Link to="#">Pricing and fees</Link>
                    <Link to="#">Coupons, credits, and gift cards</Link>
                    <Link to="#">Invoices and receipts</Link>
                    <Link to="#">Taxes</Link>
                </div>
            </div>

            <div>
                <h3>Your account</h3>
                <div className={classes.allLinks}>
                    <Link to="#">Creating an account</Link>
                    <Link to="#">Managing your account</Link>
                    <Link to="#">ID and verification</Link>
                    <Link to="#">Account security</Link>
                    <Link to="#">Reviews</Link>
                </div>
            </div>

            <div>
                <h3>Safety</h3>
                <div className={classes.allLinks}>
                    <Link to="#">Safety concerns</Link>
                    <Link to="#">Safety tips and guidelines</Link>
                    <Link to="#">Reporting issues</Link>
                    <Link to="#">Government travel restrictions and advisories</Link>
                </div>
            </div>

            <div>
                <h3>About Airbnb</h3>
                <div className={classes.allLinks}>
                    <Link to="#">Getting started</Link>
                    <Link to="#">How Airbnb works</Link>
                    <Link to="#">Our community policies</Link>
                    <Link to="#">Partnerships</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content