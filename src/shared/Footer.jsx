import { Link } from "react-router-dom";
import logo from "@/assets/footer-logo.png";

const Footer = () => {
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

  const socialIconStyle = `block w-8 h-8`;

  return (
    <footer className="bg-primaryBlue">
      <div className="container pb-6 pt-6 lg:pt-12 xl:pt-[90px]">
        <div className="flex w-full flex-col items-start justify-between gap-12 xlg:flex-row xlg:gap-[150px]">
          {/* logo */}
          <div className="space-y-4 xlg:max-w-[340px]">
            <Link to="/" className="block ">
              <img
                src={logo}
                alt="main-logo"
                className="h-full w-full object-contain"
              />
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

          {/* social icons */}
          <div>
            <p className={commonTitle}>Follow us on</p>

            <div className="mt-4 flex items-center gap-8">
              <a href="#" className={socialIconStyle}>
                {/* fb icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="32"
                  viewBox="0 0 34 32"
                  fill="none"
                  className="h-full w-full"
                >
                  <ellipse
                    cx="17.2104"
                    cy="16"
                    rx="14.2534"
                    ry="14"
                    fill="url(#paint0_linear_798_4979)"
                  />
                  <path
                    d="M22.5182 20.2816L23.1514 16.3301H19.1906V13.767C19.1906 12.6857 19.7429 11.6311 21.5169 11.6311H23.3188V8.26699C23.3188 8.26699 21.6842 8 20.1222 8C16.8588 8 14.7277 9.89294 14.7277 13.3184V16.3301H11.1016V20.2816H14.7277V29.8345C15.4557 29.944 16.2004 30 16.9591 30C17.7178 30 18.4626 29.944 19.1906 29.8345V20.2816H22.5182Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_798_4979"
                      x1="17.2104"
                      y1="2"
                      x2="17.2104"
                      y2="29.917"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18ACFE" />
                      <stop offset="1" stopColor="#0163E0" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <a href="#" className={socialIconStyle}>
                {/* instagram icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="32"
                  viewBox="0 0 34 32"
                  fill="none"
                  className="h-full w-full"
                >
                  <rect
                    x="2.53516"
                    y="2"
                    width="28.5068"
                    height="28"
                    rx="6"
                    fill="url(#paint0_radial_798_4980)"
                  />
                  <rect
                    x="2.53516"
                    y="2"
                    width="28.5068"
                    height="28"
                    rx="6"
                    fill="url(#paint1_radial_798_4980)"
                  />
                  <rect
                    x="2.53516"
                    y="2"
                    width="28.5068"
                    height="28"
                    rx="6"
                    fill="url(#paint2_radial_798_4980)"
                  />
                  <path
                    d="M23.9171 10.5C23.9171 11.3284 23.2333 12 22.3899 12C21.5465 12 20.8628 11.3284 20.8628 10.5C20.8628 9.67157 21.5465 9 22.3899 9C23.2333 9 23.9171 9.67157 23.9171 10.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7904 21C19.6018 21 21.8809 18.7614 21.8809 16C21.8809 13.2386 19.6018 11 16.7904 11C13.979 11 11.6999 13.2386 11.6999 16C11.6999 18.7614 13.979 21 16.7904 21ZM16.7904 19C18.4772 19 19.8447 17.6569 19.8447 16C19.8447 14.3431 18.4772 13 16.7904 13C15.1035 13 13.7361 14.3431 13.7361 16C13.7361 17.6569 15.1035 19 16.7904 19Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.60938 15.6C6.60938 12.2397 6.60938 10.5595 7.27517 9.27606C7.86082 8.14708 8.79532 7.2292 9.94473 6.65396C11.2514 6 12.962 6 16.3831 6H17.1976C20.6187 6 22.3293 6 23.636 6.65396C24.7854 7.2292 25.7199 8.14708 26.3056 9.27606C26.9714 10.5595 26.9714 12.2397 26.9714 15.6V16.4C26.9714 19.7603 26.9714 21.4405 26.3056 22.7239C25.7199 23.8529 24.7854 24.7708 23.636 25.346C22.3293 26 20.6187 26 17.1976 26H16.3831C12.962 26 11.2514 26 9.94473 25.346C8.79532 24.7708 7.86082 23.8529 7.27517 22.7239C6.60938 21.4405 6.60938 19.7603 6.60938 16.4V15.6ZM16.3831 8H17.1976C18.9418 8 20.1274 8.00156 21.0439 8.0751C21.9366 8.14674 22.3931 8.27659 22.7116 8.43597C23.4779 8.81947 24.1009 9.43139 24.4913 10.184C24.6536 10.4968 24.7858 10.9452 24.8587 11.8221C24.9336 12.7223 24.9352 13.8868 24.9352 15.6V16.4C24.9352 18.1132 24.9336 19.2777 24.8587 20.1779C24.7858 21.0548 24.6536 21.5032 24.4913 21.816C24.1009 22.5686 23.4779 23.1805 22.7116 23.564C22.3931 23.7234 21.9366 23.8533 21.0439 23.9249C20.1274 23.9984 18.9418 24 17.1976 24H16.3831C14.639 24 13.4533 23.9984 12.5368 23.9249C11.6441 23.8533 11.1876 23.7234 10.8691 23.564C10.1029 23.1805 9.47987 22.5686 9.08944 21.816C8.92718 21.5032 8.79497 21.0548 8.72204 20.1779C8.64716 19.2777 8.64557 18.1132 8.64557 16.4V15.6C8.64557 13.8868 8.64716 12.7223 8.72204 11.8221C8.79497 10.9452 8.92718 10.4968 9.08944 10.184C9.47987 9.43139 10.1029 8.81947 10.8691 8.43597C11.1876 8.27659 11.6441 8.14674 12.5368 8.0751C13.4533 8.00156 14.639 8 16.3831 8Z"
                    fill="white"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_798_4980"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(12.7162 23) rotate(-54.8938) scale(25.6696 25.8296)"
                    >
                      <stop stopColor="#B13589" />
                      <stop offset="0.79309" stopColor="#C62F94" />
                      <stop offset="1" stopColor="#8A3AC8" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_798_4980"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(11.6981 31) rotate(-64.742) scale(22.6671 22.9293)"
                    >
                      <stop stopColor="#E0E8B7" />
                      <stop offset="0.444662" stopColor="#FB8A2E" />
                      <stop offset="0.71474" stopColor="#E2425C" />
                      <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_798_4980"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.00801 3) rotate(-7.98745) scale(39.5808 8.32129)"
                    >
                      <stop offset="0.156701" stopColor="#406ADC" />
                      <stop offset="0.467799" stopColor="#6A45BE" />
                      <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </a>
              <a href="#" className={socialIconStyle}>
                {/* youtube icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  className="h-full w-full"
                >
                  <path
                    d="M2.32654 9.94111C2.45507 7.96233 4.04598 6.41157 6.0265 6.31345C8.89442 6.17136 12.9935 6 16.082 6C19.1706 6 23.2696 6.17136 26.1376 6.31345C28.1181 6.41157 29.709 7.96233 29.8375 9.94111C29.9607 11.8369 30.082 14.1697 30.082 16C30.082 17.8303 29.9607 20.1631 29.8375 22.0589C29.709 24.0377 28.1181 25.5884 26.1376 25.6866C23.2696 25.8286 19.1706 26 16.082 26C12.9935 26 8.89442 25.8286 6.0265 25.6866C4.04598 25.5884 2.45507 24.0377 2.32654 22.0589C2.2034 20.1631 2.08203 17.8303 2.08203 16C2.08203 14.1697 2.2034 11.8369 2.32654 9.94111Z"
                    fill="#FC0D1B"
                  />
                  <path d="M13.082 12V20L21.082 16L13.082 12Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
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
