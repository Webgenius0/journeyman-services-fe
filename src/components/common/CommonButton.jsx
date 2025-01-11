import { Link } from "react-router-dom";

const CommonButton = ({
  children,
  linkUrl = "/",
  icon,
  className = "",
}) => {
  return (
    <Link
      to={linkUrl}
      className={`inline-flex items-center rounded-3xl bg-primaryBlue font-bold leading-6 text-white xlg:text-base ${className}`}
    >
      {children}
      {icon && <span className="ml-[10px]">{icon}</span>}
    </Link>
  );
};

export default CommonButton;
