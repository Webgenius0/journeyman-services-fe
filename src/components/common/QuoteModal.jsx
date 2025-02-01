import CrossIcon from "@/assets/Icons/CrossIcon";
import React from "react";

const QuoteModal = ({ isOpen, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-[0.75] px-4 flex justify-center items-center z-50">
      <div className="bg-white px-6 py-12 xl:px-[150px] xl:py-[80px] rounded-md xl:w-[1626px] relative">
        <div
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4"
        >
          <CrossIcon />
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
