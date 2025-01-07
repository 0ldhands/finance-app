import { NavLink } from "react-router-dom"
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-container">
        <ul>
            <NavLink to='./Hole'><li>Home</li></NavLink>
            <NavLink to='./Account'><li>Account</li></NavLink>
            <NavLink to='./Setting'><li>Setting</li></NavLink>
            <NavLink to='./Aboutus'><li>Aboutus</li></NavLink>
            <NavLink to='./Contactus'><li>Contactus</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar