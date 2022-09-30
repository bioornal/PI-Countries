import React from "react";
import './css/Paginado.css'

//componente que muestra los numeros para pasar las paginas
function Paginado({
  pagActual,
  setPaisesPorPagina,
  paisesPorPagina,
  paises,
  paginado,
}) {
  const numerosPagina = [];
  //primera pag renderiza 9, las demas 10 cards
  if (pagActual === 1) {
    setPaisesPorPagina(9);
  } else {
    setPaisesPorPagina(10);
  }

  for (let i = 0; i <= Math.ceil(paises / paisesPorPagina); i++) {
    // 0 --- 25
    numerosPagina.push(i + 1);
  }
  
  numerosPagina.pop();
  return (
    <nav className="nav">
      {numerosPagina &&
        numerosPagina.map((e) => (
          <button className="button" key={e} onClick={() => paginado(e)}>
            {e}
          </button>
        ))}
    </nav>
  );
}

export default Paginado;
