import Landing from "./components/Landing";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Detalle from "./components/Detalle";
import Actividades from "./components/Actividades";
import FiltroActividades from "./components/FiltroActividades";
import BusquedaPais from "./components/BusquedaPais";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"}>
        <Landing />
      </Route>
      <Route path={"/home"}>
        <NavBar />
      </Route>
      <Route exact path={"/home"}>
        <Home />
      </Route>
      <Route exact path={"/home/filtro"}>
        <FiltroActividades />
      </Route>
      <Route exact path={"/home/actividades"}>
       <Actividades />
      </Route>
      <Route path={"/home"}>
        <Footer />
      </Route>
      <Route exact path={"/detalle/:id"}>
       <Detalle />
      </Route>
      <Route exact path={"/busqueda"}>
       <BusquedaPais />
      </Route>
    </div>
  );
}

export default App;
