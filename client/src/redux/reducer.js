const initialState = {
  countries: [],
  actividades: [],
  activitiesPais: [],
  country: {},
  searchCountry: "",
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
      case "GET_ALL_ACTIVITIES":
        return {
          ...state,
          actividades: action.payload,
        };
    case "GET_ONE_COUNTRY":
          return {
            ...state,
            country: action.payload,
            activitiesPais: action.payload.Actividades_turisticas,
          };
    case "SEARCH_COUNTRY":
            return {
        ...state,
        searchCountry: action.payload,
      };
    case "LIMPIAR_ESTADO":
            return {
        ...state,
        country: {},
      };

    default:
      return state;
  }
};
export default rootReducer;
