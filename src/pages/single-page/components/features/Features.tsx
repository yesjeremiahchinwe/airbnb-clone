import classes from "./features.module.scss"
import { BiChevronRight } from "react-icons/bi"
import { Link } from "react-router-dom"


const Features = () => {

  return (
    <section className={classes['features-wrapper']}>
        <h5>Things to know</h5>

        <div className={classes['features']}>
            <div>
                <h4>House rules</h4>
                <p>Check-in after 2:00 PM</p>
                <p>Checkout before 10:00 AM</p>
                <p>10 guests maximum</p>
                <Link to="">Show more <BiChevronRight size={20} /></Link>
            </div>

            <div>
                <h4>Safety & property</h4>
                <p>No carbon monoxide alarm</p>
                <p>No smoke alarm</p>
                <p>Some spaces are shared</p>
                <Link to="">Show more <BiChevronRight size={20} /></Link>
            </div>

            <div>
                <h4>Cancellation policy</h4>
                <p>Cancel before Apr 1 for a partial refund.</p>
                <p>Review the Host&apos;s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</p>
                <Link to="">Show more <BiChevronRight size={20} /></Link>
            </div>
        </div>
    </section>
  )
}

export default Features