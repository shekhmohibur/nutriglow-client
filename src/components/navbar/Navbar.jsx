import { Link, NavLink } from "react-router";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.webp";
import useClickOutside from "../../hooks/useClickOutside";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // example cart items count
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // search auto close
  useClickOutside(searchRef, () => setIsSearchOpen(false));
  // hamburger menu auto close
  useClickOutside(menuRef, () => setIsMobileMenuOpen(false));

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all bg-white ${
        isSticky ? "shadow-md py-2" : "py-4"
      } ${!isSticky && "border-b border-gray-200"}`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between relative">
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                  : "text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Logo */}
        <div className="w-16 h-16 shrink-0 ">
          <Link to="/">
            <img
              src={logo}
              alt="NutriGlow logo"
              className="object-cover w-full h-full rounded-full pointer-events-none"
            />
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 relative">
          {/* Search */}
          <div ref={searchRef} className="relative flex items-center">
            <button
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setIsSearchOpen((prev) => !prev)}
            >
              <IoMdSearch size={22} className={`${isSearchOpen && "hidden"}`} />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className={`transition-all duration-300 ease-in-out border border-gray-300 rounded-md px-2 py-1 ml-2 outline-none
                ${
                  isSearchOpen
                    ? "w-48 opacity-100"
                    : "w-0 opacity-0 overflow-hidden p-0 border-0"
                }`}
            />
          </div>

          {/* User Link */}
          <Link
            to={"/login"}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition"
          >
            <FaRegUser size={22} />
          </Link>

          {/* Shopping cart with indicator */}
          <div className="relative">
            <button className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition">
              <IoBagOutline size={22} />
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {cartCount}
              </span>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden cursor-pointer p-2 rounded hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className={`md:hidden ${
            !isSticky && "shadow-md"
          } bg-white w-full mt-2 rounded-b-lg animate__animated animate__fadeInDown`}
        >
          <nav className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
