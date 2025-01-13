import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      pathName: "Home",
      linkUrl: "/",
    },
    {
      pathName: "About us",
      linkUrl: "/about-us",
    },
    {
      pathName: "Contact us",
      linkUrl: "/contact",
    },
    {
      pathName: "Sign in",
      linkUrl: "/signin",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={` ${scrolled ? "bg-white" : "bg-transparent"}`}>
      <div className="hidden xl:block flex justify-between container py-[26px] transition-all">
        <Link to="/">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="hidden xl:flex items-center gap-4">
          <nav className="flex items-center w-full justify-between text-textBlack">
            {navLinks.map((item, index) => (
              <div key={index} className="flex items-center">
                <NavLink
                  to={item.linkUrl}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-textBlack" : "text-[#8CA2B4]"
                  }
                >
                  {item.pathName}
                </NavLink>
                {index !== navLinks.length - 1 && (
                  <div className="w-[2px] h-[8px] bg-[#8CA2B4] mx-8"></div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
