import { useTravelDetails } from "@/contexts/TravelDetailsProvider";

const InsuranceDetails = () => {
  const { address1, address2, zipCode, selectedCountry, city, telephone } =
    useTravelDetails();
  console.log(address1, address2, zipCode, city, selectedCountry);

  const fullAddress = `${address1} ${address2}, ${city}, ${selectedCountry}`;

  return (
    <div className="border border-[#B8B6B5] rounded-md px-4 py-4 xl:pt-6 xl:pb-9 xl:px-6 mt-6">
      <h3 className="text-center xl:text-left xl:text-lg font-bold text-textBlack2 xl:leading-[30px]">
        Insurance Details
      </h3>
      <div className="mt-6 xl:max-w-[722px] space-y-3">
        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 xl:leading-[25px]">
            Area:
          </h4>
          <p className="text-textBlack2 xl:leading-[25px]">
            {city}, {selectedCountry}
          </p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 xl:leading-[25px]">
            Start Date:
          </h4>
          <p className="text-textBlack2 leading-[25px]">01/01/2025</p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 xl:leading-[25px]">
            Extra Cover:
          </h4>
          <p className="text-textBlack2 text-left xl:leading-[25px]">Yes</p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 xl:leading-[25px]">
            Address:
          </h4>
          <p className="text-textBlack2 xl:leading-[25px]">{fullAddress}</p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Contact Details:
          </h4>
          <p className="text-textBlack2 leading-[25px}">{telephone}</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetails;
