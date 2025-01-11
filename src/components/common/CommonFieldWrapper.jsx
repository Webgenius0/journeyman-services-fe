import QuestionIcon from "@/assets/Icons/QuestionIcon";

const CommonFieldWrapper = ({ label, children }) => {
  return (
    <div className="relative mb-4 border border-[#FFD085] rounded-[5px] py-[22px] px-[11px]">
      <div className="flex gap-3">
        <p className="mb-3 text-textBlack">{label}</p>
        <div className="bg-[#8CA2B4] h-6 w-6 rounded-full flex justify-center items-center">
          <QuestionIcon />
        </div>
      </div>
      <div>{children}</div>
      {/* required text */}
      <div className="absolute right-0 top-0 rounded-bl-[5px] ">
        <h3 className="bg-[#FFD085] py-1 px-[5px] text-white leading-4">Required</h3>
      </div>
    </div>
  );
};

export default CommonFieldWrapper;
