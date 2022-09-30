import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import imagen from "../images/logo.png";

function NavBar() {
  return (
    <nav className="navBar">
      <ul className="ul">
        <li className="li">
          <Link className="linkNav" to={"/"}>
            Landing
          </Link>
        </li>
        <li className="li">
          <Link className="linkNav" to={"/home"}>
            Home
          </Link>
        </li>
        <li className="li">
          <Link className="linkNav" to={"/home/actividades"}>
            Crear Actividad
          </Link>
        </li>
      </ul>
      <div className="logoCaja">
        <img className="logo" src={imagen} alt="Logo" />
        <h1 className="h1">Henry Countries</h1>
      </div>
    </nav>
  );
}

export default NavBar;
