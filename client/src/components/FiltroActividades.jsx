import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function FiltroActividades() {
  const dispatch = useDispatch()
  const [actividad, setActividad] = useState('');
  
  const handleChange = (e) => {
    setActividad(e.target.value);
    console.log(actividad)
  }
const handleClick = async () => {
const pedido = await axios.get("http://localhost:3001/countries/actFilter", actividad)
console.log(pedido.data)
}
  return (
    <div>
      <label htmlFor="actividad">Actividad</label>
      <input onChange={handleChange} name='actividad' id="actividad" type="text" value={actividad}/>
      <button onClick={handleClick}>Get</button>
    </div>
  );
}


export default FiltroActividades;
