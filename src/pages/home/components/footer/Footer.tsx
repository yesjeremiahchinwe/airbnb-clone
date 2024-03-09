import { Link } from "react-router-dom";
import classes from "./footer.module.scss";
import { FiChevronsDown } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div className={classes["footer-wrapper"]}>
        <h4>Inspiration for future getaways</h4>

        <nav>
          <ul>
            <li>Popular</li>
            <li>Arts & culture</li>
            <li>Outdoors</li>
            <li>Mountains</li>
            <li>Beach</li>
            <li>Unique stays</li>
            <li>Categories</li>
            <li>Things to do</li>
            <li>Airbnb-friendly apartments</li>
          </ul>
        </nav>

        <div className={classes["features"]}>
          <Link to="">
            <p>Canmore</p>
            <p>Condo rentals</p>
          </Link>

          <Link to="">
            <p>Benalmadena</p>
            <p>Apartment rentals</p>
          </Link>

          <Link to="">
            <p>Marbella</p>
            <p>Beachfront rentals</p>
          </Link>

          <Link to="">
            <p>Mijas</p>
            <p>House rentals</p>
          </Link>

          <Link to="">
            <p>Prescott</p>
            <p>Cottage rentals</p>
          </Link>

          <Link to="">
            <p>Scottsdale</p>
            <p>Pet-friendly rentals</p>
          </Link>

          <Link to="">
            <p>Tucson</p>
            <p>Pet-friendly rentals</p>
          </Link>

          <Link to="">
            <p>Jasper</p>
            <p>Cadin rentals</p>
          </Link>

          <Link to="">
            <p>Moutain View</p>
            <p>House rentals</p>
          </Link>

          <Link to="">
            <p>Devonport</p>
            <p>Vacation rentals</p>
          </Link>

          <Link to="">
            <p>Mallacoota</p>
            <p>Pet-friendly rentals</p>
          </Link>

          <Link to="">
            <p>Ibiza</p>
            <p>Apartment rentals</p>
          </Link>

          <Link to="">
            <p>Anaheim</p>
            <p>Family-friendly rentals</p>
          </Link>

          <Link to="">
            <p>Montterey</p>
            <p>Cottage rentals</p>
          </Link>

          <Link to="">
            <p>Paso Robles</p>
            <p>House rentals</p>
          </Link>

          <Link to="">
            <p>Santa Barbara</p>
            <p>Cottage rentals</p>
          </Link>

          <Link to="">
            <p>Sonoma</p>
            <p>House rentals</p>
          </Link>

          <Link to="">
            <span>Show more</span>
            <FiChevronsDown />
          </Link>
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

export default Footer;
