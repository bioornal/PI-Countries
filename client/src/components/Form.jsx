import React from "react";
import { useState } from "react";
import "./css/Form.css";
import InputsForm from "./InputsForm";

function Form({ handleChange, handleSubmit, input, error }) {
// const [boolean, setBoolean] = useState(false)
const [cantPaises, setCantPaises] = useState(0)

  const addCountry = (e)=>{
    e.preventDefault()
    // setBoolean(true)
    setCantPaises(cantPaises+1)
  }

  return (
    <div className="contenedorForm">
      <h1>Crear Actividad Turistica</h1>
      <form onSubmit={handleSubmit}>
        <InputsForm input={input} handleChange={handleChange} addCountry={addCountry} cantPaises={cantPaises}/>
        <button
          className="buttonForm"
          type="submit"
          disabled={
            Object.values(error).filter((e) => e !== "").length === 0
              ? false
              : true
          }
        >
          Enviar formulario
        </button>
        <br />
        <br />
        {Object.values(error).filter((e) => e !== "").length === 0 ? (
          ""
        ) : (
          <span
            style={{
              color: "red",
              fontWeight: "bolder",
              fontSize: "14px",
              textDecoration: "underline",
            }}
          >
            Hay errores en los campos
          </span>
        )}
      </form>
    </div>
  );
}

export default Form;
