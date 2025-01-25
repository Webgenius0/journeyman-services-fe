import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import CommonButton from "../common/CommonButton";
import { Collapse } from "react-collapse";

const PriceDetails = () => {
  const { selectedCountry, selectedArea, selectedInsuranceType } =
    useTravelDetails();

  // countries for those message area will display
  const countriesWithNote = [
    "United Kingdom",
    "Isle of Man",
    "Guernsey",
    "Jersey",
  ];

  // checking all required fields are selected
  const isRequiredFieldSelected =
    selectedCountry && selectedArea && selectedInsuranceType;

  const showNote = countriesWithNote.includes(selectedCountry);

  return (
    <div className="xl:max-w-[400px]">
      {/* Conditionally rendering Quote or Price Details */}
      {!isRequiredFieldSelected ? (
        <div className="mt-[30px] border border-[#8CA2B4] py-[21px] px-[21px] rounded-[5px] max-h-[200px]">
          <h3 className="xl:text-lg font-bold text-textBlackV2 xl:leading-[30px] border-b border-[#8CA2B4] text-center mb-[7px]">
            Your Quote
          </h3>
          <p className="text-sm xl:text-base mb-[7px]">
            To get your quote, please fill in a minimum of:
          </p>
          <ul className="text-sm xl:text-base">
            <li>• Country of residence</li>
            <li>• Insurance type</li>
            <li>• Area of travel</li>
          </ul>
        </div>
      ) : (
        <div>
          {/* price */}
          <Collapse isOpened={true}>
            <div className="mt-[30px] border border-[#8CA2B4] py-[21px] px-[21px] rounded-[5px] xl:min-w-[400px]">
              <h3 className="xl:text-lg font-bold text-textBlackV2 xl:leading-[30px] border-b border-[#8CA2B4] text-center mb-[26px]">
                Price Details
              </h3>
              <p className="text-center xl:text-left mb-[7px] text-textBlackV2 text-xl xl:text-2xl">
                <span className="font-bold">Price:</span> $132.33
              </p>
              <ul className="text-center xl:text-left leading-[25px]">
                <li>The Price includes</li>
                <li>Basic premium: $126</li>
                <li>An administration charge of $4.54 (3.5%)</li>
              </ul>
              <div className="flex justify-between mt-3 xl:mt-[21px]">
                <CommonButton linkUrl="/party-details" className="px-7 py-3">
                  Continue
                </CommonButton>
                <CommonButton className="px-7 py-3">Save Quote</CommonButton>
              </div>
            </div>
          </Collapse>
          {/* Conditionally rendering the "Please note" section */}
          <Collapse isOpened={true}>
            {showNote && (
              <div className="mt-14 border border-[#8CA2B4] py-[21px] px-[21px] rounded-[5px] xl:min-w-[400px]">
                <h3 className="text-lg font-bold text-textBlackV2 leading-[30px] border-b border-[#8CA2B4] text-center mb-[7px]">
                  Please note
                </h3>
                <p className="text-center xl:text-left mb-[7px] text-textBlackV2 text-sm xl:text-base xl:leading-[25px]">
                  Pre-existing conditions are not covered under the terms and
                  conditions of Journeyman policies. If you are seeking travel
                  insurance that would provide cover for a pre-existing
                  condition, the Money and Pensions Service (MaPS) has launched
                  a travel insurance directory on its Money Advice Service
                  website which can be found here and details providers which
                  can offer travel insurance inclusive of pre-existing
                  conditions.
                </p>
              </div>
            )}
          </Collapse>
        </div>
      )}
    </div>
  );
};

export default PriceDetails;
