const CoreValueList = ({ title, description }) => {
  return (
    <div className="">
      <h3 className="text-xl text-textGray font-bold leading-8">{title}</h3>
      <p className="leading-[25px] mt-[5px] text-textGrayV3">{description}</p>
    </div>
  );
};

export default CoreValueList;
