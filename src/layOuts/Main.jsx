import { Outlet } from "react-router"
import Header from "../component/Header"


function Main() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Main