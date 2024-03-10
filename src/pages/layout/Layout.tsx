import { Outlet } from "react-router-dom"
import ClickContext from "../../context/context"
import { useState } from "react"


const Layout = () => {
  const [selected, setSelected] = useState(0)

  return (
    <>
    <ClickContext.Provider value={{ selected, setSelected }}>
        <Outlet />
    </ClickContext.Provider>
    </>
  )
}

export default Layout