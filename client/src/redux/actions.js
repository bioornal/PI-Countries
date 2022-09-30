import axios from "axios";

export const getCountries = () => {
  return async (dispatch) => {
    const pedido = await axios.get("http://localhost:3001/countries");
    const data = await pedido.data;
    dispatch({
      type: "GET_ALL_COUNTRIES",
      payload: data
    });
  };
};
export const getActivities = () => {
  return async (dispatch) => {
    const pedido = await axios.get("http://localhost:3001/countries");
    const data = await pedido.data;
    const actividades = data.map(e=>e.Actividades_turisticas).flat().map(e=>e.name)
    let eliminarRepetidos = actividades.filter((e,i)=>{
      return actividades.indexOf(e) === i;
    })
    dispatch({
      type: "GET_ALL_ACTIVITIES",
      payload: eliminarRepetidos
    });
  };
};

export const getOneCountry = (id) => {
  return async (dispatch) => {
    const pedido = await axios.get(`http://localhost:3001/countries/${id}`);
    const data = await pedido.data;
    dispatch({
      type: "GET_ONE_COUNTRY",
      payload: data,
    });
  };
};
export const envioForm = (input) => {

  return async (dispatch) => {
    await axios.post("http://localhost:3001/activities", input);
    dispatch({
      type: "LOAD_ACTIVITIES",
      payload: input,
    })
  };
};
export const searchCountry = (country) => {
  return {
    type: "SEARCH_COUNTRY",
    payload: country
  }
}
export const limpiarEstado = (id) => {
  return {
    type: "LIMPIAR_ESTADO",
    payload: id
  }
}
       