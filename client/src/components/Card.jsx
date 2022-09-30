import React from "react";
import { Link } from "react-router-dom";
import './css/Card.css'

function Card({currentPage}) {

  return (
    <div className="contenedor">
      {currentPage.map((e) => (
        <Link className="link" to={`/detalle/${e.ID}`} key={e.ID}>
          <div className="card">
            <img src={e.flag} alt="imagen pais" className="imagenCard"/>
            <h3 className="link">{e.name}</h3>
            <h4 className="link">{e.continent}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
