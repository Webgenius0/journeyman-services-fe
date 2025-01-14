import CrossIcon from "@/assets/Icons/CrossIcon";

const CommonModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-[0.75] px-4 flex justify-center items-center z-50">
      <div className="bg-white px-6 py-12 xl:px-[150px] xl:py-[80px] rounded-md xl:w-[1626px] relative">
        <div
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4"
        >
          <CrossIcon />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-center xl:text-left">
          {content.title}
        </h3>
        <p className="text-sm xl:text-base text-center xl:text-left">
          {content.content}
        </p>
      </div>
    </div>
  );
};

export default CommonModal;
