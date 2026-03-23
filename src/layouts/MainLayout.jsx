import { Outlet } from "react-router";
import Footer from "../components/common/Footer";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar />
      <main className="grow container mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
