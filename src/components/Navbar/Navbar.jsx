import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="navbar__title">
        RECETAS WEB
      </NavLink>

      <div className="navbar__links">
        <NavLink to="/beef">BEEF</NavLink>
        <NavLink to="/pig">PIG</NavLink>
        <NavLink to="/legumes">LEGUMES</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;