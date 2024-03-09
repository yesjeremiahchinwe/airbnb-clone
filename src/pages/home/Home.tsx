import Accomodation from "../../components/accomodations/Accomodations";
import FixedFooter from "./components/fixed-footer/FixedFooter";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "../../components/navbar";
import SubHeader from "./components/sub-header/SubHeader";

const Home = () => {
  return (
    <>
      <Navbar />
      <SubHeader />
      <Menu />
      <Accomodation />
      <FixedFooter />
      <Footer />
    </>
  );
};

export default Home;
