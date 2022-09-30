import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./css/BusquedaPais.css";

function BusquedaDumb() {
  const history = useHistory();
  const paisBuscado = useSelector((state) => state.searchCountry);
  const paises = useSelector((state) => state.countries);
  const paisHallado = paises.find((e) => e.name === paisBuscado);
  return (
    <div className="detalleTodo2">
      <div className="dentro2" id="caja">
        {paisHallado ? (
          <div>
            <h1>{paisHallado.name}</h1>
            <p>Continente: {paisHallado.continent}</p>
            <p>Población: {paisHallado.population}</p>
            <p>Capital: {paisHallado.capital}</p>
            <p>Sub-región: {paisHallado.subregion}</p>
            <p>Área: {paisHallado.area}</p>
            <img src={paisHallado.flag} alt="pais" />
            <br />
            <button className="boton" onClick={() => history.go(-1)}>
              Volver
            </button>
          </div>
        ) : (
          <div>
            <h1>No existe ese país</h1>
            <button className="boton" onClick={() => history.go(-1)}>
              Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BusquedaDumb;
