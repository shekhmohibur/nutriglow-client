import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Loader from "../components/shared/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSec from "../hooks/useAxiosSec";

const AdminRoute = ({ children }) => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSec();
const {data:userData, isLoading} = useQuery({
    queryKey:['user'],
    queryFn:async()=> {
        const res = await axiosSecure.get(`/users?email=${user?.email}`);
        return res.data[0].userData;
    }
})


  if (isLoading) {

    return <Loader fullScreen={false} />;

  }


  if (!user) {

    return <Navigate to="/login" />;

  }


  if (userData.role !== "admin") {

    return <Navigate to="/dashboard" />;

  }


  return children;

};

export default AdminRoute;