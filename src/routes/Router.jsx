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
import BlogDetails from "../pages/home/BlogDetails";
import ErrorPage from "../pages/error/ErrorPage";
import RoleRoute from "./RoleRoute";
import Settings from "../pages/dashboard/pages/Settings";
import Analytics from "../pages/dashboard/pages/Analytics";
import DblogPosts from "../pages/dashboard/pages/DblogPosts";
import Orders from "../pages/dashboard/pages/Orders";
import DashboardLayout from "../layouts/DashboardLayout";
import Products from "../pages/dashboard/pages/Products";
import Overview from "../pages/dashboard/pages/Overview";
import AddProduct from "../pages/dashboard/pages/AddProduct";
import Customers from "../pages/dashboard/pages/Customers";
import CartPage from "../pages/home/CartPage";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "cart", Component: CartPage },

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
          { path: "blog/:slug", Component: BlogDetails },
        ],
      },
    ],
  },
  // 📊 dashboard route
  {
    path: "/dashboard",

    Component: DashboardLayout,

    children: [
      {
        index: true,

        Component: () => (
          <RoleRoute allow={["admin", "user"]}>
            <Overview />
          </RoleRoute>
        ),
      },

      {
        path: "products",

        Component: () => (
          <RoleRoute allow={["admin"]}>
            <Products />
          </RoleRoute>
        ),
      },

      {
        path: "add-product",

        Component: () => (
          <RoleRoute allow={["admin"]}>
            <AddProduct />
          </RoleRoute>
        ),
      },

      {
        path: "orders",

        Component: () => (
          <RoleRoute allow={["admin"]}>
            <Orders />
          </RoleRoute>
        ),
      },

      {
        path: "blog",

        Component: () => (
          <RoleRoute allow={["admin"]}>
            <DblogPosts />
          </RoleRoute>
        ),
      },

      {
        path: "analytics",

        Component: () => (
          <RoleRoute allow={["admin"]}>
            <Analytics />
          </RoleRoute>
        ),
      },

      {
        path: "settings",

        Component: () => (
          <RoleRoute allow={["admin", "user"]}>
            <Settings />
          </RoleRoute>
        ),
      },
      {
        path: "customers",

        Component: () => (
          <RoleRoute allow={["admin", "user"]}>
            <Customers />
          </RoleRoute>
        ),
      },
    ],
  },
]);

export default Router;
