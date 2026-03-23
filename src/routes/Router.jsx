import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/home/Home";
import Services from "../pages/home/Services";
import Contact from "../pages/home/Contact";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import About from "../pages/home/About";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About,},
      { path: "contact", Component: Contact },

      // 🔓 Public-only routes
      {
        Component: PublicRoute,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },

      // 🔐 Private routes
      {
        Component: PrivateRoute,
        children: [
          { path: "dashboard", Component: Dashboard },
        ],
      },
    ],
  },
]);

export default Router;