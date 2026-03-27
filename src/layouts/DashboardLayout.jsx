import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../pages/dashboard/Sidebar";
import Topbar from "../pages/dashboard/Topbar";
import useAxiosSec from "../hooks/useAxiosSec";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/shared/Loader";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSec();
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      return res.data[0].userData;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="flex">
        {/* sidebar */}
        <div
          className={`
            fixed lg:static z-50
            transition-all duration-300

            ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <Sidebar userData={userData}/>
        </div>

        {/* main content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* topbar */}
          <Topbar setOpen={setOpen} userData={userData}/>

          {/* page content */}
          <main className="flex-1 p-4 md:p-6">
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 min-h-[80vh]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
