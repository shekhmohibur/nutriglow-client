import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Loader from "../components/shared/Loader";


const RoleRoute = ({ allow, children }) => {

  const { user, loading } = useAuth();
const role = 'user';
  if (loading) {

    return <Loader fullScreen={false} />;

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