import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";


const RoleRoute = ({ allow, children }) => {

  const { user, loading } = useAuth();
const role = 'admin';
  if (loading) {

    return <p>Loading...</p>;

  }

  if (!user) {

    return <Navigate to="/login" />;

  }

  if (!allow.includes(role)) {

    return <Navigate to="/" />;

  }

  return children;

};

export default RoleRoute;