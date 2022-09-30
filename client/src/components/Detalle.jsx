import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOneCountry, limpiarEstado} from "../redux/actions";
import "./css/Detalle.css";

function Detalle() {
  let dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

 
  useEffect(() => {
    dispatch(getOneCountry(id));
   return () => {
    dispatch(limpiarEstado(id));
    };
    
  }, []);
  let countryID = useSelector((state) => state.country);
  let actividadID = useSelector((state) => state.activitiesPais);
  return (
    <div className="detalleTodo">
      <div className="dentro">
      <button onClick={()=>history.go(-1)}>Volver</button>
        <h1>NOMBRE: {countryID.Nombre}</h1>
        <img src={countryID.Bandera} alt="imagen pais" />
        <h3>CODIGO DE PAÍS: {countryID.ID}</h3>
        <h3>CAPITAL: {countryID.Capital}</h3>
        <h3>CONTINENTE: {countryID.Continente}</h3>
        <h3>POBLACIÓN: {countryID.Población}</h3>
        <h3>SUBREGIÓN: {countryID.Subregion}</h3>
        <h3>ÁREA: {countryID.Área}</h3>
      </div>
      <div className="actividades">
        <h4>ACTIVIDADES TURÍSTICAS:</h4>
        {actividadID.length === 0 ? (
          <p className="sinActividad">No hay actividades relacionadas!</p>
        ) : (
          actividadID.map((e, i) => (
            <ul key={i}>
              <li>
                <p>{e.name}</p>
              </li>
              <ul>
                <li>Nivel de dificultad: {e.dificulty}</li>
                <li>Duración: {e.durability}</li>
                <li>Temporada: {e.season}</li>
              </ul>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}

export default Detalle;
