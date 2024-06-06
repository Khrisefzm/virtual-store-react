import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./views/Home.tsx";
import Details from "./views/Details";
import Cart from "./views/Cart";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import NotFound from "./views/NotFound.tsx";
import Offers from "./views/Offers.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:productId",
        element: <Details />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
