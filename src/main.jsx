import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={routes}></RouterProvider>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
