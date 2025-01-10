import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    {
      pathName: "Home",
      linkUrl: "/",
    },
    {
      pathName: "Checklist",
      linkUrl: "/checklist",
    },
    {
      pathName: "Live Break",
      linkUrl: "/live-break",
    },
    {
      pathName: "About Us",
      linkUrl: "/about-us",
    },
  ];

  return (
    <div className="flex justify-between container py-[26px]">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="hidden items-center gap-[30px] text-lg xl:flex">
        <nav className="flex gap-4 text-textBlack">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.linkUrl}
              className={({ isActive }) =>
                isActive ? "font-bold lg:text-lg" : "lg:text-lg"
              }
            >
              {item.pathName}
              {index !== navLinks.length - 1 && (
                <span className="border-r-2 border[#8CA2B4] mx-2 border h-2" />
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
