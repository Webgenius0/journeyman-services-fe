import { useTravelDetails } from "@/contexts/TravelDetailsProvider";

const PolicyPrice = () => {
  const { selectedCurrency, basicPremium, administrationCharge, totalPrice } =
    useTravelDetails();

  return (
    <div className="border border-[#B8B6B5] rounded-md pt-6 pb-9 px-9 mt-6">
      <h3 className="text-lg font-bold text-textBlack2 leading-[30px]">
        Policy Price
      </h3>
      <div className="mt-6 max-w-[722px] space-y-3">
        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Basic Premium:
          </h4>
          <p className="text-textBlack2 leading-[25px]">
            {selectedCurrency === "British Pounds"
              ? `£${basicPremium.toFixed(2)}`
              : selectedCurrency === "USD"
              ? `$${basicPremium.toFixed(2)}`
              : ""}
          </p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Administration charge:
          </h4>
          <p className="text-textBlack2 leading-[25px]">
            {selectedCurrency === "British Pounds"
              ? `£${administrationCharge.toFixed(2)}`
              : selectedCurrency === "USD"
              ? `$${administrationCharge.toFixed(2)}`
              : ""}
          </p>
        </div>

        <div className="flex justify-between">
          <h4 className="font-semibold text-textBlack2 leading-[25px]">
            Total:
          </h4>
          <p className="text-textBlack2 text-left leading-[25px]">
            {selectedCurrency === "British Pounds"
              ? `£${totalPrice.toFixed(2)} `
              : selectedCurrency === "USD"
              ? `$${totalPrice.toFixed(2)}`
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPrice;
