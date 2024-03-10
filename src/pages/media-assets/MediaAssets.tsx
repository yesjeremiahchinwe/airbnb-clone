import { useEffect } from "react"
import MediaHero from "./components/hero/MediaHero"
import Media from "./components/media/Media"


const MediaAssets = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])
  
  return (
    <>
    <MediaHero />
    <Media />
    </>
  )
}

export default MediaAssets