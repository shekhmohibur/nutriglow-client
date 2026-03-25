import { FaBars } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Topbar = ({ setOpen }) => {

  const { user } = useAuth();


  return (

    <div className="sticky top-0 z-30 bg-white border-b border-base-200 px-4 md:px-6 py-3 flex items-center justify-between">

      {/* left */}
      <div className="flex items-center gap-3">

        {/* mobile menu btn */}
        <button
          onClick={() => setOpen(prev => !prev)}
          className="lg:hidden text-lg"
        >
          <FaBars />
        </button>


        <h2 className="font-semibold">

          Dashboard

        </h2>

      </div>


      {/* right */}
      <div className="flex items-center gap-3">

        <div className="text-sm">

          {user?.name || "Admin"}

        </div>


        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">

          A

        </div>

      </div>

    </div>

  );

};

export default Topbar;