import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Coffees from "../pages/Coffees";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts></Mainlayouts>,
    children: [
      {
         path: "/",
         element: <Home></Home>,
         children: [

         ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routes;