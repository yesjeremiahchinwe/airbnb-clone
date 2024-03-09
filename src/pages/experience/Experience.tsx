import HelperFooter from "../help/components/footer/HelpFooter";
import BestSellers from "./components/best/BestSellers";
import Collection from "./components/collection/Collection";
import Groups from "./components/groups/Groups";
import ExperienceNavbar from "./components/navbar/ExperienceNavbar";
import Plan from "./components/plan/Plan";
import Starting from "./components/starting/Starting";
import Weekend from "./components/weekend/Weekend";
import classes from "./experience.module.scss";

const Experience = () => {
  return (
    <>
      <ExperienceNavbar />
      <Collection />
      <Plan />
      <BestSellers />
      <Starting />
      <Groups />
      <Weekend />
      <div className={classes["experience_footer"]}>
        <HelperFooter />
      </div>
    </>
  );
};

export default Experience;
