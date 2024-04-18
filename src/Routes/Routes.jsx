import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Offer from "../Pages/Offer/Offer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Estate.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/state/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/Estate.json"),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/offer",
        element: (
          <PrivateRoute>
            <Offer></Offer>
          </PrivateRoute>
        ),
        loader: () => fetch("/offer.json"),
      },
      {
        path: "/offer-state/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/offer.json"),
      },
    ],
  },
]);

export default routes;
