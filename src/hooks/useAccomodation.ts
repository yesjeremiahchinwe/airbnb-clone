
import accomodationData from "../lib/accomodation-data"

const useAccomodation = (id: number) => {
    const accomodation = accomodationData.filter(accom => accom.id === id)
 
    return { accomodation }
}

export default useAccomodation