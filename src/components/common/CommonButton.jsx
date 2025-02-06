import { Link } from "react-router-dom";

const CommonButton = ({ type, children, linkUrl, icon, className = "", onClick }) => {
  if (type === 'submit') {
    return (
      <button
        type="submit"
        className={`inline-flex items-center rounded-3xl bg-primaryBlue font-bold leading-6 text-white text-sm xlg:text-base border border-transparent ${className} hover:bg-white hover:text-primaryBlue hover:border-primaryBlue transition duration-300`}
        onClick={onClick}
      >
        {children}
        {icon && <span className="ml-[10px]">{icon}</span>}
      </button>
    );
  }

  return (
    <Link
      to={linkUrl}
      className={`inline-flex items-center rounded-3xl bg-primaryBlue font-bold leading-6 text-white text-sm xlg:text-base border border-transparent ${className} hover:bg-white hover:text-primaryBlue hover:border-primaryBlue transition duration-300`}
    >
      {children}
      {icon && <span className="ml-[10px]">{icon}</span>}
    </Link>
  );
};

export default CommonButton;
