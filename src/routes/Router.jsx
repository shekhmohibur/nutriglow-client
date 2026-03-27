import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// Public pages
import Home from "../pages/home/Home";
import Services from "../pages/home/Services";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Shop from "../pages/shop/Shop";
import CartPage from "../pages/home/CartPage";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import BlogDetails from "../pages/home/BlogDetails";
import ErrorPage from "../pages/error/ErrorPage";

// Dashboard pages
import Overview from "../pages/dashboard/pages/Overview";
import Products from "../pages/dashboard/pages/Products";
import AddProduct from "../pages/dashboard/pages/AddProduct";
import Orders from "../pages/dashboard/pages/Orders";
import Customers from "../pages/dashboard/pages/Customers";
import MyOrders from "../pages/dashboard/pages/MyOrders";
import Profile from "../pages/dashboard/pages/Profile";
import Analytics from "../pages/dashboard/pages/Analytics";
import DblogPosts from "../pages/dashboard/pages/DblogPosts";
import Wishlist from "../pages/dashboard/pages/Wishlist";
import AdminRoute from "./AdminRoute";
import Settings from "../pages/dashboard/pages/Settings";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <CartPage /> },
      { path: "shop", element: <Shop /> },

      // Public routes
      {
        element: <PublicRoute />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },

      // Private non-dashboard
      {
        element: <PrivateRoute />,
        children: [
          { path: "blog/:slug", element: <BlogDetails /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },

  // Dashboard
  {
    path: "/dashboard",

    Component: DashboardLayout,

    children: [
      {
        index: true,

        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        ),
      },

      {
        path: "customers",

        element: (
          <AdminRoute>
            <Customers />
          </AdminRoute>
        ),
      },
      {
        path: "profile",

        element: (
          <AdminRoute>
            <Profile />
          </AdminRoute>
        ),
      },

      {
        path: "products",

        element: (
          <AdminRoute>
            <Products />
          </AdminRoute>
        ),
      },

      {
        path: "add-product",

        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },

      {
        path: "orders",

        element: (
          <AdminRoute>
            <Orders />
          </AdminRoute>
        ),
      },

      {
        path: "blog",

        element: (
          <AdminRoute>
            <DblogPosts />
          </AdminRoute>
        ),
      },

      {
        path: "analytics",

        element: (
          <AdminRoute>
            <Analytics />
          </AdminRoute>
        ),
      },
      {
        path: "my-orders",

        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },

      {
        element:<PrivateRoute/>,
       children: [
        {path:'settings', element:<Settings/>}
       ]
      },
    ],
  },
]);

export default Router;
