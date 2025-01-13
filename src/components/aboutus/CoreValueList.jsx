const CoreValueList = ({ title, description, icon }) => {
  return (
    <div className="flex gap-6">
      {/* icon */}
      <div className="p-[11px] bg-[#D9D9D9] w-[47px] h-[47px] rounded-full">
        {icon}
      </div>
      <div>
      <h3 className="text-xl text-textGray font-bold leading-8">{title}</h3>
      <p className="leading-[25px] mt-[5px] text-textGrayV3">{description}</p>
      </div>
    
    </div>
  );
};

export default CoreValueList;
