import { useEffect, useState } from "react";


const useHeight = (heigt: number) => {
    const [currHeight, setCurrHeight] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = document.documentElement.scrollTop;

      if (scrollY >= heigt) {
        setCurrHeight(true);
      } else {
        setCurrHeight(false);
      }
    });
  }, [currHeight])

  return currHeight
}

export default useHeight

