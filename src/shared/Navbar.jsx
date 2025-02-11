import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { pathName: "Home", linkUrl: "/" },
    { pathName: "About us", linkUrl: "/about-us" },
    { pathName: "Contact us", linkUrl: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full z-50 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        } transition-all`}
      >
        <div className="flex justify-between items-center px-6 lg:px-16 py-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            <nav className="flex items-center space-x-8 text-textBlack">
              {navLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.linkUrl}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-textBlack" : "text-[#8CA2B4]"
                  }
                >
                  {item.pathName}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-textBlack text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-textBlack text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col items-start px-6 py-16 space-y-6">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.linkUrl}
              className={({ isActive }) =>
                isActive ? "font-bold text-textBlack" : "text-[#8CA2B4]"
              }
              onClick={() => setSidebarOpen(false)}
            >
              {item.pathName}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
