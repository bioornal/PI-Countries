import React from "react";

function InputsForm({ input, handleChange, addCountry, cantPaises }) {
  return (
    <>
    {}
      <div className="cajon">
        <label htmlFor="country">Nombre País</label>
        <span>
          <button onClick={addCountry} className="spanBoton">
            +
          </button>
        </span>
        <input
          className="inputForm"
          key="country"
          value={input.country}
          name="country"
          id="country"
          placeholder="Argentina.."
          onChange={handleChange}
          type="text"
          required
        />
      </div>
      <div className="cajon">
        <label htmlFor="name">Nombre Actividad</label>
        <input
          className="inputForm"
          key="name"
          value={input.name}
          name="name"
          id="name"
          placeholder="Ski.."
          onChange={handleChange}
          type="text"
          required
        />
      </div>
      <div className="cajon">
        <label htmlFor="dificulty">Dificultad</label>
        <input
          className="inputForm"
          key="dificulty"
          value={input.dificulty}
          name="dificulty"
          id="dificulty"
          placeholder="número del 1-5.."
          onChange={handleChange}
          type="text"
          required
        />
      </div>
      <div className="cajon">
        <label htmlFor="durability">Duración</label>
        <input
          className="inputForm"
          key="durability"
          value={input.durability}
          name="durability"
          id="durability"
          placeholder="horas.."
          onChange={handleChange}
          type="text"
          required
        />
      </div>
      <div className="cajon">
        Temporada
        <select
          className="selectForm"
          onChange={handleChange}
          name="season"
          defaultValue=""
          required
        >
          <option value="">---</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
      </div>
      <br />
    </>
  );
}

export default InputsForm;
