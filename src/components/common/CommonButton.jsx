import { Link } from "react-router-dom";

const CommonButton = ({ children, linkUrl = "/" }) => {
  return (
    <Link
      to={linkUrl}
      className="inline-block rounded-3xl bg-primaryBlue font-bold leading-6 text-white lg:px-10 xlg:text-base  py-3 px-7"
    >
      {children}
    </Link>
  );
};

export default CommonButton;
