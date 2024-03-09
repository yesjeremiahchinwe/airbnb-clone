import { Link } from "react-router-dom";
import classes from "./footer.module.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


const HelperFooter = () => {

  return (
    <footer>
      <div className={classes["help-footer-wrapper"]}>
        <div className={classes["vital-links"]}>
          <div className={classes["border_down"]}>
            <h6>Support</h6>
            <Link to="/">Help Center</Link>
            <Link to="/">AirCover</Link>
            <Link to="/">ASnti-discrimination</Link>
            <Link to="/">Disability support</Link>
            <Link to="/">Cancellation options</Link>
            <Link to="/">Report neighborhood concern</Link>
          </div>

          <div className={classes["border_down"]}>
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

export default HelperFooter;