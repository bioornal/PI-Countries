import React from "react";
import { Link } from "react-router-dom";
import "./css/Landing.css";

function Landing() {
  return (
    <div className="contenedorLanding">
      <header
        style={{
          padding: "20px",
          background: "#8c8377",
        }}
      >
        <h1 className="h1Landing">Proyecto Individual</h1>
        <h2 className="h2Landing">Henry Countries</h2>
        <hr />
        <Link to={"/home"}>
          <button className="buttonLanding">Entrar al sitio</button>
        </Link>
      </header>
      <br />
    </div>
  );
}

export default Landing;
