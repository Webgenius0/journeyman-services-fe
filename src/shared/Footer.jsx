import { Link } from "react-router-dom";
import logo from "@/assets/footer-logo.png";
import useFetchData from "@/hooks/api/useFetchData";

const Footer = () => {
  const { data } = useFetchData("/page/common");
  console.log('common data', data);
  
  const footerLinks = [
    {
      title: "Quick links",
      children: [
        { name: "Home", link: "/" },
        { name: "About us", link: "/about-us" },
        { name: "Contact us", link: "/contact" },
        { name: "Sign in", link: "/signin" },
      ],
    },
    {
      title: "Policies",
      children: [
        { name: "Terms & Conditions", link: "/terms" },
        { name: "Privacy Policy", link: "/privacy" },
      ],
    },
  ];

  const commonTitle = `font-inter text-lg xl:text-xl font-bold leading-7 text-white`;

  return (
    <footer className="bg-primaryBlue">
      <div className="container pb-6 pt-6 lg:pt-12 xl:pt-[90px]">
        <div className="flex w-full flex-col items-start justify-between gap-6 xlg:flex-row xlg:gap-[150px]">
          {/* logo */}
          <div className="space-y-4 xlg:max-w-[340px]">
            <Link to="/" className="block">
              <div className="w-full">
                <img
                  src={logo}
                  alt="main-logo"
                  className="w-48 lg:w-60 xlg:w-full h-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm leading-6 text-white xlg:text-base">
              Welcome to journeyman, the game-changer in how businesses and
              individuals book and utilize public signage spaces. Our
              cutting-edge solution is designed to make your advertising
              experience seamless, efficient, and incredibly effective.
            </p>
          </div>

          {/* other links */}
          {footerLinks.map((item, index) => (
            <div key={index}>
              <p className={commonTitle}>{item.title}</p>

              <div className="mt-2.5 flex flex-col gap-3">
                {item.children.map((child, i) => (
                  <Link
                    className="font-inter text-sm font-normal leading-6 text-white xlg:text-base"
                    to={child.link}
                    key={i}
                  >
                    {" "}
                    {child.name}{" "}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* lower part */}
      <div className="border-t border-white py-6 text-center font-inter text-sm leading-6 text-white xlg:text-base">
        <p>All Rights Reserved © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
