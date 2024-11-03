import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Coffees from "../pages/Coffees";
import Coffecards from "../component/Coffecards";
import CoffeDetails from "../pages/CoffeDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts></Mainlayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Coffecards></Coffecards>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <Coffecards></Coffecards>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/coffee/:id",
        element: <CoffeDetails></CoffeDetails>,
        loader: () => fetch("../coffees.json"),
      },
    ],
  },
]);

export default routes;