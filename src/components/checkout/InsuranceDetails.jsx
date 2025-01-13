const InsuranceDetails = () => {
  return (
    <div className="border border-[#B8B6B5] rounded-md pt-6 pb-9 px-6 mt-6">
      <h3 className="text-lg font-bold text-textBlack2 leading-[30px]">
        Insurance Details
      </h3>
      <div className="mt-6 max-w-[722px] space-y-3">
        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Area:
          </h4>
          <p className="text-textBlack2 leading-[25px]">Dhaka, Bangladesh</p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Start Date:
          </h4>
          <p className="text-textBlack2 leading-[25px]">01/01/2025</p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Extra Cover:
          </h4>
          <p className="text-textBlack2 text-left leading-[25px]">Yes</p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Address:
          </h4>
          <p className="text-textBlack2 leading-[25px]">
            123 Main Street, Dhaka
          </p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Contact Details:
          </h4>
          <p className="text-textBlack2 leading-[25px]">+880123456789</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetails;
