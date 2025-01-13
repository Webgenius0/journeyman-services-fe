import { useState } from "react";
import QuestionIcon from "@/assets/Icons/QuestionIcon";
import CommonModal from "../common/CommonModal";

const CommonFieldWrapper = ({ label, children, modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative mb-4 border border-[#FFD085] rounded-[5px] py-4 xl:py-[22px] px-2 xl:px-[11px]">
      <div className="flex gap-3">
        {label && <p className="mb-3 text-textBlack text-sm xl:text-base">{label}</p>}
        <div
          className="bg-[#8CA2B4] h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
          onClick={openModal}
        >
          <QuestionIcon />
        </div>
      </div>
      <div>{children}</div>

      {/* Required text */}
      <div className="absolute right-0 top-0 rounded-bl-[5px]">
        <h3 className="bg-[#FFD085] py-1 px-[5px] text-white leading-4">
          Required
        </h3>
      </div>

      {/* Modal */}
      <CommonModal isOpen={isModalOpen} content={modalContent} onClose={closeModal} />
    </div>
  );
};

export default CommonFieldWrapper;
