import useExperience from "../../../../hooks/useExperience/useExperience"
import groups from "../../../../lib/groups"


const Groups = () => {
  return useExperience(
    groups,
    "Great for groups"
  )
}

export default Groups