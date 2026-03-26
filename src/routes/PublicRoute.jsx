import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PublicRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  // if user is logged in, go back to where they tried before
  const from = location.state?.from?.pathname || "/dashboard";

  return user ? <Navigate to={from} replace /> : <Outlet />;
};

export default PublicRoute;