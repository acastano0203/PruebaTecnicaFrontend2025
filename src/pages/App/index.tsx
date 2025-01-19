import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import Recipes from "../Recipes";
import Nav from "../../components/nav";

import "./App.scss";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/recipes", element: <Recipes /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Nav logo="/ic_home.png" />
    </BrowserRouter>
  );
}

export default App;
