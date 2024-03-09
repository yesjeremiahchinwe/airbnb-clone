import { useParams } from "react-router-dom";
import SinglePageNavbar from "./components/single-page-navbar/SinglePageNavbar";
import classes from "./single-page.module.scss";
import { useEffect, useState } from "react";
import SinglePageImages from "./components/single-page-images/SinglePageImages";
import SinglePageDetails from "./components/single-page-details/SinglePageDetails";
import Reviews from "./components/reviews/Reviews";
import Host from "./components/host/Host";
import Features from "./components/features/Features";
import SinglePageFooter from "./components/footer/SinglePageFooter";
import FixedHeader from "./components/fixed-header/FixedHeader";
import useAccomodation from "../../hooks/useAccomodation"
import SinglePageFixedFooter from "./components/fixed-footer/SinglePageFixedFooter";


const SinglePage = () => {
  const { id } = useParams();
  const [isMounted, setIsMounted] = useState(false);
  const { accomodation } = useAccomodation(Number(id))


  useEffect(() => {
    setIsMounted(true);
    document.documentElement.scrollTo({ top: 0, behavior: "auto" });
  }, [])


  if (!isMounted) return null;

  return (
    <>
      <SinglePageNavbar />
      <FixedHeader />

      <section className={classes["single-page"]}>
        <div>
          {accomodation?.map((accom) => (
            <div key={accom.id}>
              <SinglePageImages accom={accom} />
              <SinglePageDetails accom={accom} />
            </div>
          ))}
        </div>

        <Reviews /> 
        <Host />
        <Features />
      </section>

      <SinglePageFooter />
      <SinglePageFixedFooter />
    </>
  );
};

export default SinglePage;
