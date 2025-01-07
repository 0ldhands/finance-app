import { Outlet } from "react-router-dom"
import Hole from "../Pages/Hole"
import '../css/Home.css' 

const Homelayout = () => {
  return (
    <div className="das-container">
        <Hole/>
        <Outlet/>
    </div>
  )
}

export default Homelayout