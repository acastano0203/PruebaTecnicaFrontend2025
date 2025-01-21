import { BrowserRouter, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "../Home";
import Recipes from "../Recipes";
import Nav from "../../components/Nav";
import { ContextProvider } from "../../context";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <BrowserRouter>
          <AppRoutes />
          <Nav />
        </BrowserRouter>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
