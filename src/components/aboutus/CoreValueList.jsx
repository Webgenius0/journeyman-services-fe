const CoreValueList = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* icon */}
      <div className="p-[11px] bg-[#D9D9D9] w-[47px] h-[47px] rounded-full">
        {icon}
      </div>
      <div className="flex flex-col items-center xl:block">
        <h3 className="xl:text-xl text-textGray font-bold leading-8">
          {title}
        </h3>
        <p className="text-center leading-[25px] mt-[5px] text-textGrayV3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CoreValueList;
