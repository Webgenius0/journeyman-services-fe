const StepCard = ({
    title,
    subtitle,
    isLastItem,
    widthClass = "max-w-[256px]",
  }) => {
    return (
      <div
        className={`relative ${widthClass} space-y-1 pb-3 pl-8 before:absolute before:left-0 before:top-2 before:h-[15px] before:w-[15px] before:rounded-full before:bg-primaryBlue after:absolute after:left-2 after:top-8 after:h-[70%] after:w-[1px] after:bg-[#C1D0E5] lg:pb-4 xlg:space-y-3 xlg:pb-14 ${isLastItem ? `after:hidden` : ``}`}
      >
        <p className="font-semibold leading-6 text-textBlack xlg:text-left xlg:text-xl">
          {title}
        </p>
        <p className="text-sm leading-6 text-textGray lg:text-base xlg:text-left">
          {subtitle}
        </p>
      </div>
    );
  };
  
  export default StepCard;