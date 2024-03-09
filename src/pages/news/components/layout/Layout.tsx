import { Outlet } from "react-router-dom"
import NewsNavbar from "../navbar/NewsNavbar"
import NewsFooter from "../news-footer/NewsFooter"


const NewsLayout = () => {
  return (
    <>
    <NewsNavbar />
    <div>
        <Outlet />
    </div>
    <NewsFooter />
    </>
  )
}

export default NewsLayout