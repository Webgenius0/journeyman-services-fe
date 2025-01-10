import { Link, NavLink } from "react-router-dom";
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
      <Link to="/">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="hidden items-center gap-[30px] text-lg xl:flex">
        <nav className="flex items-center gap-4 text-textBlack">
          {navLinks.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.linkUrl}
                className={({ isActive }) =>
                  isActive ? "font-bold lg:text-lg" : "lg:text-lg"
                }
              >
                {item.pathName}
              </NavLink>
              {index !== navLinks.length - 1 && (
                <span className="bg-black w-2 h-2 rounded-full"></span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
