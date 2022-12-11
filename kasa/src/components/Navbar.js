import { NavLink } from "react-router-dom";
import logo from "../styles/asset/LOGO.png"


const Navbar = () => {
  return (
      <div className="navbar-page">
         <div className="logo">
         <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="nav">     
         <NavLink className="nav-aceuil" to="/">
           <p>Accueil</p>
         </NavLink>
         <NavLink className="nav-apropos" to="/propos">
           <p>A propos</p>
         </NavLink>
        </div> 
      </div>
    );
  };
  
  export default Navbar;