import { Link } from "react-router-dom";

const CommonButton = ({ children, linkUrl = "/", icon }) => {
  return (
    <Link
      to={linkUrl}
      className="inline-flex items-center rounded-3xl bg-primaryBlue font-bold leading-6 text-white lg:px-10 xlg:text-base py-3 px-7"
    >
     
      {children}
      {icon && <span className="ml-[10px]">{icon}</span>}
    </Link>
  );
};

export default CommonButton;
