import CrossIcon from "@/assets/Icons/CrossIcon";

const CommonModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-[0.75] flex justify-center items-center z-50">
      <div className="bg-white px-[150px] py-[80px] rounded-md w-[1626px] relative">
        <div
          onClick={onClose}
          className="cursor-pointer absolute right-4 top-4"
        >
          <CrossIcon />
        </div>
        <h3 className="text-xl font-semibold mb-4">{content.title}</h3>
        <p>{content.content}</p>
      </div>
    </div>
  );
};

export default CommonModal;
