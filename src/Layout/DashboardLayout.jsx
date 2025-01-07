import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../Component/Navbar"
import '../css/Home.css'

const DashboardLayout = () => {

  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout