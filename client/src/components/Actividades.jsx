import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { envioForm } from "../redux/actions";
import Form from "./Form";

function Actividades() {
  const [input, setInput] = useState({});
  const pais = input.country
  const paises = useSelector((state)=>state.countries)
  const paisHallado = paises.find((e) => e.name === pais);
  console.log(paisHallado)
  const [error, setError] = useState({
    errNombre:"",
    errActividad:"",
    errDificultad:"",
    errValorDificultad:"",
    errDuracion:"",
    errTemporada:""
  });
  const dispatch = useDispatch();

  //VALIDACIONES:
  const handleChange = (e) => {
    if (e.target.name === "country") {
      //expresion primera letra mayus sino no la enuentra en la DB
      const mayusculas = e.target.value.replace(/(^\w{1})|(\s+)/g, (letra) =>
        letra.toUpperCase()
      );
      if (!/^[a-zA-Z\s]{0,255}$/.test(e.target.value)) {
        setError({
          ...error,
          errNombre: "Debe ser un string",
        });
      } else {
        setError({
          ...error,
          errNombre: "",
        });
      }
    }
    if (e.target.name === "name") {
      if (!/^[a-zA-Z\s]{0,255}$/.test(e.target.value)) {
        setError({
          ...error,
          errActividad: "Debe ser un string",
        });
      } else {
        setError({
          ...error,
          errActividad: "",
        });
      }
    }
    if (e.target.name === "dificulty") {
      if (!/^-?\d*(\.\d+)?$/.test(e.target.value)) {
        setError({
          ...error,
          errDificultad: "Solo números",
        });
      } else if (e.target.value < 1 || e.target.value > 5) {
        setError({
          ...error,
          errValorDificultad: "debe ser entre 1 y 5",
        });
      } else {
        setError({
          ...error,
          errValorDificultad: "",
          errDificultad:""
        });
      }
    }
    if (e.target.name === "durability") {
      if (!/^-?\d*(\.\d+)?$/.test(e.target.value)) {
        setError({
          ...error,
          errDuracion: "Solo números",
        });
      } else {
        setError({
          ...error,
          errDuracion: "",
        });
      }
    }
    if (e.target.name === "season") {
      if (
        e.target.value !== "Verano" &&
        e.target.value !== "Invierno" &&
        e.target.value !== "Primavera" &&
        e.target.value !== "Otoño"
      ) {
        setError({
          ...error,
          errTemporada: "Se debe seleccionar una opción",
        });
      } else if (e.target.value === "") {
        setError({
          ...error,
          errTemporada: "Se debe seleccionar una opción",
        });
      } else {
        setError({
          ...error,
          errTemporada: "",
        });
      }
    }
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(paisHallado){
    dispatch(envioForm(input));
    alert("Datos enviados correctamente!");
    setInput({});
    } else {
      setInput({});                   
      alert('No se ha encontrado ese país')
    }
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        input={input}
        error={error}
        />
    </>
  );
}

export default Actividades;
