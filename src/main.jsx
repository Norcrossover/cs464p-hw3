import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import List from "./routes/list";
import Population from "./routes/population";
import Home from "./routes/home";
import Info from "./routes/info";
import Languages from "./routes/languages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home/",
    element: <Home />,
  },
  {
    path: "list/",
    element: <List />,
  },
  {
    path: "population/",
    element: <Population />,
  },
  {
    path: "info/",
    element: <Info />,
  },
  {
    path: "languages/",
    element: <Languages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
