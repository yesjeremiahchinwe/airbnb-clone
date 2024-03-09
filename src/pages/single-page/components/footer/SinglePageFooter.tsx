import { Link } from "react-router-dom";
import classes from "./footer.module.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BiChevronRight } from "react-icons/bi";


const SinglePageFooter = () => {

  return (
    <footer>
      <div className={classes["single-page-footer-wrapper"]}>
        <div className={classes["pagination"]}>
          <div>
            <span>Airbnb</span>
            <BiChevronRight size={15} />
            <span>Croatia</span>
            <BiChevronRight size={15} />
            <span>Split-Dalmatia County</span>
            <BiChevronRight size={15} />
            <span>Vis</span>
          </div>
        </div>

        <div className={classes["features"]}>
          <h4>Explore other options in and around Vis</h4>
          <div>
            <Link to="">
              <p>Hvar</p>
              <p>Vacation rentals</p>
            </Link>

            <Link to="">
              <p>Split</p>
              <p>Vacation rentals</p>
            </Link>

            <Link to="">
              <p>Makarska</p>
              <p>Vacation rentals</p>
            </Link>

            <Link to="">
              <p>Zadar</p>
              <p>Vacation rentals</p>
            </Link>

            <Link to="">
              <p>Dubrovnik</p>
              <p>Vacation rentals</p>
            </Link>

            <Link to="">
              <p>Sarajevo</p>
              <p>Vacation rentals</p>
            </Link>

            <Link to="">
              <p>Kotor</p>
              <p>Vacation rentals</p>
            </Link>

            <Link to="">
              <p>Bari</p>
              <p>Vacation rentals</p>
            </Link>

            <Link to="">
              <p>Budva</p>
              <p>Vacation rentals</p>
            </Link>
          </div>
        </div>

        <div className={`${classes["features"]} ${classes['types']}`}>
          <h4>Other types of stays on Airbnb</h4>
          <div>
            <Link to="">Vis vacation rentals</Link>

            <Link to="">Vis monthly stays</Link>

            <Link to="">Villa vacation rentals in Vis</Link>

            <Link to="">Villa vacation rentals in Split-Dalmatia County</Link>

            <Link to="">House vacation rentals in Split-Dalmatia County</Link>

            <Link to="">Beach house vacation rentals in Split-Dalmatia County</Link>

            <Link to="">Villa vacation rentals in Croatia</Link>

            <Link to="">Pet-friendly vacation rentals in Croatia</Link>

            <Link to="">House vacation rentals in Croatia</Link>
          </div>
        </div>

        <div className={classes["vital-links"]}>
          <div>
            <h6>Support</h6>
            <Link to="/">Help Center</Link>
            <Link to="/">AirCover</Link>
            <Link to="/">ASnti-discrimination</Link>
            <Link to="/">Disability support</Link>
            <Link to="/">Cancellation options</Link>
            <Link to="/">Report neighborhood concern</Link>
          </div>

          <div>
            <h6>Hosting</h6>
            <Link to="/">Airbnb your home</Link>
            <Link to="/">AirCover for Hosts</Link>
            <Link to="/">Hosting resources</Link>
            <Link to="/">Community forum</Link>
            <Link to="/">Hosting responsibly</Link>
            <Link to="/">Airbnb-friendly apartments</Link>
            <Link to="/">Join a free Hosting class</Link>
          </div>

          <div>
            <h6>Airbnb</h6>
            <Link to="/">Newsroom</Link>
            <Link to="/">New features</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Gift cards</Link>
            <Link to="/">Airbnb.org emergency stays</Link>
          </div>
        </div>

        <div className={classes["terms-privacy"]}>
          <div>
            <span>&copy; {new Date().getFullYear()} Airbnb, Inc.</span>
            <span>Terms</span>
            <div className={classes.dot} />
            <span>Sitemap</span>
            <div className={classes.dot} />
            <span>Privacy</span>
            <div className={classes.dot} />
            <span>Your Privacy Choices</span>
          </div>

          <div>
            <TbWorld size={20} />
            <h6>English (US)</h6>
            <h6>$ USD</h6>
            <div>
              <FaSquareFacebook size={20} />
              <FaTwitterSquare size={20} />
              <FaInstagramSquare size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SinglePageFooter;