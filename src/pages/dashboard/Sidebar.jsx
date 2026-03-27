import { Link, NavLink } from "react-router";
import menu from "../../config/DashboardMenu.json";
import {
  FaHome,
  FaBox,
  FaPlus,
  FaShoppingCart,
  FaPen,
  FaChartBar,
  FaCog,
  FaUsers,
  FaUser,
  FaHeart,
} from "react-icons/fa";

const icons = {
  home: <FaHome />,
  box: <FaBox />,
  plus: <FaPlus />,
  cart: <FaShoppingCart />,
  user:<FaUser/>,
  heart:<FaHeart/>,
  users: <FaUsers />,
  edit: <FaPen />,
  chart: <FaChartBar />,
  settings: <FaCog />,
};

const Sidebar = ({userData}) => {

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-base-200 flex flex-col">
      {/* logo */}
      <div className="px-6 pt-5 border-b border-base-200">
        <Link to="/"className="text-xl font-bold tracking-wide text-primary">
          NutriGlow
        </Link>

        <p className="text-xs text-gray-400">Admin Dashboard</p>
      </div>

      {/* menu */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {menu
          .filter((item) => item.roles.includes(userData?.role))
          .map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group

                 ${
                   isActive
                     ? "bg-primary text-white shadow-sm"
                     : "text-gray-600 hover:bg-base-100 hover:text-primary"
                 }`
              }
            >
              {/* icon */}
              <span className="text-sm">{icons[item?.icon]}</span>

              {/* label */}
              <span className="text-sm font-medium">{item?.label}</span>
            </NavLink>
          ))}
      </nav>

      {/* bottom user */}
      <div className="p-4 border-t border-base-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-full">
            A
          </div>

          <div>
            <p className="text-sm font-medium capitalize">{userData?.role}</p>

            <p className="text-xs text-gray-400">{userData?.email}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
