import { useEffect } from "react"
import ArticleNavbar from "../article-169/components/navbar/Navbar"
import HelperFooter from "../help/components/footer/HelpFooter"
import Content from "./content/Content"

const AllTopics = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div>
        <ArticleNavbar />
        <Content />
        <HelperFooter />
    </div>
  )
}

export default AllTopics