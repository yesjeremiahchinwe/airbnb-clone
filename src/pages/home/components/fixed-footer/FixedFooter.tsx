import { BiSearch } from "react-icons/bi"
import { GoHeart } from "react-icons/go"
import { FaCircleUser } from "react-icons/fa6"

import classes from "./fixed-footer.module.scss"
import { useEffect, useState } from "react";


const FixedFooter = () => {
  const [isStarted, setISStarted] = useState(false)
  const [currentHeight, setCurrentHeight] = useState(0)


  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = document.documentElement.scrollTop
      setCurrentHeight(scrollY)

      if (scrollY > currentHeight) {
        setISStarted(true)
      } else if (currentHeight > scrollY) {
        setISStarted(false)
      }

    })
  }, [isStarted, currentHeight])

  
  return (
    <section className={`${classes['fixed-footer-container']} ${!isStarted ? classes.fixed : classes.hide}`}>
      <div>
        <BiSearch size={25} color="#E61E4D" fontWeight={700} />
        <p>Explore</p>
      </div>

      <div>
        <GoHeart size={25} color="#717171" fontWeight={700} />
        <p>Wishlists</p>
      </div>

      <div>
        <FaCircleUser size={25} color="#717171" fontWeight={700} />
        <p>Log in</p>
      </div>
    </section>
  );
};

export default FixedFooter;
