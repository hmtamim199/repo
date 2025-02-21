import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import AllCollection from "../Pages/AllCollectioan/AllCollection/AllCollection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/collection",
        element: <Menu></Menu>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "/allcollection",
        element: <AllCollection></AllCollection>,
      },
    ],
  },
]);
