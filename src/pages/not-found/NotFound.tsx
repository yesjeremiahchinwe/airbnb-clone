import { useEffect } from "react"


const NotFound = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])
  
  return (
    <div>NotFound</div>
  )
}

export default NotFound