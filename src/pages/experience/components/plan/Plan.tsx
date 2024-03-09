import online_plans from "../../../../lib/online-plans";
import useExperience from "../../../../hooks/useExperience/useExperience";

const Plan = () => {
    
  return useExperience(
    online_plans,
    "Plan a trip with help from local Hosts around the world"
  );
};

export default Plan;
