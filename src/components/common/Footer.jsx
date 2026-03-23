import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import logo from "../../assets/logo.webp";
import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white">
      {/* top */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <img src={logo} alt="NutriGlow logo" className="w-20 rounded-full shadow-sm"/>
            <h2 className="text-2xl font-bold mb-3">NutriGlow</h2>

            <p className="text-white/80 text-sm max-w-xs">
              Timeless elegance, modern sophistication
            </p>
          </div>

          {/* shop */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">SHOP</h3>

            <ul className="space-y-3 text-sm text-white/80 flex flex-col">
              <Link to={'/'} className="hover:text-white cursor-pointer">New Arrivals</Link>

              <Link to={'/'} className="hover:text-white cursor-pointer">Collections</Link>
            </ul>
          </div>

          {/* about */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">ABOUT</h3>

            <ul className="space-y-3 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">Our Story</li>

              <li className="hover:text-white cursor-pointer">
                Sustainability
              </li>
            </ul>
          </div>

          {/* support */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">SUPPORT</h3>

            <ul className="space-y-3 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">Contact Us</li>

              <li className="hover:text-white cursor-pointer">
                Shipping & Returns
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="border-t border-white/20"></div>

      {/* bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70">
          © 2026 Full Magic. All rights reserved.
        </p>

        {/* payment icons */}
        <div className="flex gap-4 text-2xl text-white/80">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
          <FaCcPaypal />
        </div>
      </div>
    </footer>
  );
}
