import ExploreMore from "./components/explore/ExploreMore"
import HelperFooter from "./components/footer/HelpFooter"
import Guildes from "./components/guildes/Guildes"
import HelpHero from "./components/hero/HelpHero"
import HelpNavbar from "./components/navbar/Navbar"
import Articles from "./components/top-articles/Articles"


const Help = () => {

  return (
    <section>
        <HelpNavbar />
        <HelpHero />
        <Guildes />
        <Articles />
        <ExploreMore />
        <HelperFooter />
    </section>
  )
}

export default Help