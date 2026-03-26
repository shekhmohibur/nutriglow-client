import { Link, NavLink, useNavigate } from "react-router";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import logo from "../../assets/logo.webp";
import useClickOutside from "../../hooks/useClickOutside";
import useAuth from "../../hooks/useAuth";

const Navbar = ({ userData }) => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  console.log(userData);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cartCount] = useState(3);

  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useClickOutside(searchRef, () => setIsSearchOpen(false));
  useClickOutside(menuRef, () => setIsMobileMenuOpen(false));
  useClickOutside(profileRef, () => setIsProfileOpen(false));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        isSticky
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-4 border-b-2 border-gray-200"
      }`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between">
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium transition ${
                  isActive
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Logo */}
        <Link to="/" className="w-14 h-14">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-cover rounded-full"
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div ref={searchRef} className="relative flex items-center">
            <button
              aria-label="Search"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <IoMdSearch size={20} />
            </button>

            <input
              autoFocus={isSearchOpen}
              placeholder="Search products..."
              className={`absolute right-10 transition-all duration-300
              border rounded-md px-3 py-1 outline-none bg-white shadow
              ${
                isSearchOpen
                  ? "w-40 md:w-56 opacity-100"
                  : "w-0 opacity-0 pointer-events-none"
              }`}
            />
          </div>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            aria-label="Cart"
            className="relative p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoBagOutline size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile */}
          <div ref={profileRef} className="relative">
            <button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <FaRegUser size={20} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-fadeIn">
                {user ? (
                  <>
                    <button
                      onClick={() => navigate("/profile")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => navigate("/dashboard")}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${userData?.role === 'user' && 'hidden'}`}
                    >
                      Dashboard
                    </button>

                    <button
                      onClick={() => navigate("/orders")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                    >
                      My Orders
                    </button>

                    <button
                      onClick={() => navigate("/wishlist")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                    >
                      Wishlist
                    </button>

                    <div className="border-t my-1"></div>

                    <button
                      onClick={logoutUser}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 cursor-pointer"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full flex justify-center mt-2">
          <div
            ref={menuRef}
            className="w-11/12 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 animate-fadeIn"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `mx-4 px-4 py-3 rounded-lg text-sm font-medium transition
              ${
                isActive
                  ? "bg-purple-50 text-purple-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
