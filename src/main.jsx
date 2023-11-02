import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Ranking from "./components/Ranking.jsx";
import Games from "./components/Games.jsx";
import Rules from "./components/Rules.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Ranking />,
      },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
