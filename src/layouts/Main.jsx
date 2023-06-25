import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Container from "../components/Shared/Container/Container"
import Navbar from "../components/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  )
}

export default Main
