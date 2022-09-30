import { useEffect } from "react";
import { getCountries, searchCountry, getActivities } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Paginado from "./Paginado";
import React, { useState } from "react";
import FiltradoContinente from "./FiltradoContinente";
import "./css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  let dispatch = useDispatch();

  //---Carga de paises inicio----//
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);
  //-------//

  //---ESTADOS LOCALES----//
  const [continente, setContinente] = useState("");
  const [order, setOrder] = useState("");
  const [population, setPopulation] = useState("");
  const [actividad, setActividad] = useState("");
  //-------//

  //---BUSQUEDA CONTINENTE----//
  const paises = useSelector((state) => state.countries);
  const continentFilter = paises.filter((e) => e.continent === continente);
  //-------//

  //---BUSQUEDA ACTIVIDAD----//
  const actividades = useSelector((state) => state.actividades).sort();

  const cargarActividades = () => {
    actividades.forEach((e) => {
      document.getElementById("activities").innerHTML +=
        "<option value='" + e + "'>" + e + "</option>";
    });
  };
  useEffect(() => {
    cargarActividades();
  }, [actividades]);

  const handleActivities = (e) => {
    setActividad(e.target.value);
  };
  //-------//

  //---PAGINADO----//
  const [pagActual, setPagActual] = useState(1);
  const [paisesPorPagina, setPaisesPorPagina] = useState(10);
  const iUltimoPais = pagActual * paisesPorPagina; // 10  -->(click en 2) 20
  const iPrimerPais = iUltimoPais - paisesPorPagina; // 0 -->(click en 2) 10
  const currentPage = paises.slice(iPrimerPais, iUltimoPais); //0 --- 10 -->(click en 2) 10 --- 20
  const paginado = (numPagina) => {
    setPagActual(numPagina);
  };
  //-------//

  const handleOrder = (e) => {
    setOrder(e.target.value);
    if (e.target.value === "Ascendente") {
      paises.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (e.target.value === "Descendente") {
      paises.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    } else if (e.target.value === "") {
      dispatch(getCountries());
    }
  };

  const handlePopulation = (e) => {
    setPopulation(e.target.value);
    if (e.target.value === "Ascendente") {
      paises.sort(function (a, b) {
        if (a.population < b.population) {
          return -1;
        }
        if (a.population > b.population) {
          return 1;
        }
        return 0;
      });
    } else if (e.target.value === "Descendente") {
      paises.sort(function (a, b) {
        if (a.population > b.population) {
          return -1;
        }
        if (a.population < b.population) {
          return 1;
        }
        return 0;
      });
    } else if (e.target.value === "") {
      dispatch(getCountries());
    }
  };

  const handlePaisBuscado = (e) => {
    const capitalize =
      e.target.value[0].toUpperCase() + e.target.value.slice(1);
    // console.log(capitalize)
    dispatch(searchCountry(capitalize));
  };

  return paises.length === 0 ? (
    <div>
      <h1>Server caído...</h1>
    </div>
  ) : (
    <>
      <form className="form">
        <input
          className="inputHome"
          key="pais"
          type="text"
          id="pais"
          name="pais"
          placeholder="Buscar un pais..."
          onChange={handlePaisBuscado}
        />
        <Link to={"./busqueda"}>
          <button style={{ marginRight: "40px" }}>Ir</button>
        </Link>

        <label>Países por continente</label>
        <select
          className="selectHome"
          name="paises"
          onChange={(e) => setContinente(e.target.value)}
          defaultValue=""
          style={{ marginRight: "40px" }}
        >
          <option value="">---</option>
          <option value="Europe">Europa</option>
          <option value="South America">America del Sur</option>
          <option value="North America">America del Norte</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceanía</option>
          <option value="Asia">Asia</option>
        </select>

        <span>Búsqueda por actividad</span>
        <select
          className="selectHome"
          name="activities"
          id="activities"
          onChange={handleActivities}
          defaultValue=""
          style={{ marginRight: "40px" }}
        >
          <option value="">---</option>
        </select>

        <span>Ordenar Alfabeticamente</span>
        <select
          className="selectHome"
          name="orden"
          defaultValue=""
          onChange={handleOrder}
          style={{ marginRight: "40px" }}
        >
          <option value="">---</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <span>Orden por Población</span>
        <select
          className="selectHome"
          name="poblacion"
          defaultValue=""
          onChange={handlePopulation}
        >
          <option value="">---</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </form>
      <hr />
      <br />
      {continentFilter.length > 0 ? (
        <FiltradoContinente
          continentFilter={continentFilter}
          continente={continente}
        />
      ) : (
        <>
          <Paginado
            paisesPorPagina={paisesPorPagina}
            paises={paises.length}
            paginado={paginado}
            setPaisesPorPagina={setPaisesPorPagina}
            pagActual={pagActual}
          />
          <br />
          <Card currentPage={currentPage} />
        </>
      )}
    </>
  );
}

export default Home;
