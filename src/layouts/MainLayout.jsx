import { Outlet } from "react-router";
import Footer from "../components/common/Footer";
import Navbar from "../components/navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import useAxiosSec from "../hooks/useAxiosSec";
import useAuth from "../hooks/useAuth";
import Loader from "../components/shared/Loader";

const MainLayout = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSec();
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      return res.data[0].userData;
    },
  });
  if(isLoading){
    return <Loader/>;
  }
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar userData={userData}/>
      <main className="flex-1 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
