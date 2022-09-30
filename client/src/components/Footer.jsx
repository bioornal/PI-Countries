import React from "react";
import imagen from "../images/face.png";
import "./css/Footer.css";
function Footer() {
  return (
    <div>
      <footer>
        <p className="p">Designed by Christian A. Speziali</p>
        <a href="https://www.facebook.com/cspeziali">
        <img className="foto" src={imagen} alt="Facebook Imagen" />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
