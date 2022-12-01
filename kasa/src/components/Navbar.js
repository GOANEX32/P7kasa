import { NavLink } from "react-router-dom";
import logo from "../styles/asset/LOGO.png"


const Navbar = () => {
  

    return (
      <div className="navbar-page">
         <div className="logo">
         <img src={logo} alt="logo"/>
        </div>

        <div className="nav">     
         <NavLink className="nav-aceuil" to="/">
           <h2>Aceuil</h2>
         </NavLink>
         <NavLink className="nav-apropos" to="/propos">
           <h2>A propos</h2>
         </NavLink>
        </div> 
      </div>
    );
  };
  
  export default Navbar;