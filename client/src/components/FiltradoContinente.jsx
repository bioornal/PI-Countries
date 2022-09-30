import { Link } from "react-router-dom";

export default function FiltradoContinente({ continentFilter }) {
  return (
    <div className="contenedor">
      {" "}
      {continentFilter.map((e) => (
        <Link className="link" to={`/detalle/${e.ID}`} key={e.ID}>
          <div className="card">
            <img src={e.flag} alt="imagen pais" className="imagenCard" />
            <h3>{e.name}</h3>
            <h4 className="link">{e.continent}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
