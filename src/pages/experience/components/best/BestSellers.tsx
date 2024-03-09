import onlineBestSellers from "../../../../lib/online-bestsellers";
import useExperience from "../../../../hooks/useExperience/useExperience";

const BestSellers = () => {

  return useExperience(
    onlineBestSellers,
    "Best sellers"
  )
}

export default BestSellers
