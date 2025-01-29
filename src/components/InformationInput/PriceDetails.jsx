import { useState, useEffect } from "react";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import CommonButton from "../common/CommonButton";
import { Collapse } from "react-collapse";
import useLogicPrices from "@/hooks/useLogicPrices";
import LoadingComponent from "../loaders/LoadingComponent";

const PriceDetails = () => {
  const {
    selectedCountry,
    selectedArea,
    selectedInsuranceType,
    priceData,
    selectedCurrency,
    setTotalPrice,
    setBasicPremium,
    setAdministrationCharge,
    selectedTravelTypes,
    tripLength,
    cancellationCover,
    setEndDate,
    date,
    endDate,
  } = useTravelDetails();

  const { priceLogics } = useLogicPrices();

  // Local state for loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (priceLogics && priceData) {
      // If priceLogics and priceData are loaded, set loading to false
      setLoading(false);
    }
  }, [priceLogics, priceData]);

  // Parse prices from the API response
  const charge = parseFloat(priceLogics?.data?.charge);
  const winterSportsPrice = parseFloat(priceLogics?.data?.winter_sprots);
  const adventureSportsPrice = parseFloat(
    priceLogics?.data?.adventure_sprots_single
  );

  const multiTripStandardPrice = parseFloat(
    priceLogics?.data?.multi_trip_standard
  );
  const multiTripExtendedPrice = parseFloat(
    priceLogics?.data?.multi_trip_extended
  );
  const cancellationCoverageStandardPrice = parseFloat(
    priceLogics?.data?.cancellation_coverage_standard
  );
  const cancellationCoverageIncreasedPrice = parseFloat(
    priceLogics?.data?.cancellation_coverage_increased
  );

  //  prices based on the selected currency
  const priceInGBP = priceData?.data?.price_in_pound;
  const priceInUSD = priceData?.data?.price_in_dollar;

  //  basic premium and total price based on the selected currency
  const basicPremium =
    selectedCurrency === "British Pounds"
      ? priceInGBP
      : selectedCurrency === "USD"
      ? priceInUSD
      : 0;

  const adminCharge = basicPremium * (charge / 100);
  let totalPrice = basicPremium + adminCharge;

  // Add winter sports or adventure sports price if selected
  if (selectedTravelTypes.includes("winter")) {
    totalPrice *= winterSportsPrice;
  }
  if (selectedTravelTypes.includes("adventure")) {
    totalPrice *= adventureSportsPrice;
  }

  // Apply trip length multiplier
  if (tripLength === "standard") {
    totalPrice *= multiTripStandardPrice;
  } else if (tripLength === "extended") {
    totalPrice *= multiTripExtendedPrice;
  }

  //  cancellation cover multiplier
  if (cancellationCover === "standard") {
    totalPrice *= cancellationCoverageStandardPrice;
  } else if (cancellationCover === "increased") {
    totalPrice *= cancellationCoverageIncreasedPrice;
  }

  if (selectedCountry === "United Kingdom") {
    const taxUK = parseFloat(priceLogics?.data?.tax);
    const taxAmount = (totalPrice * taxUK) / 100;
    totalPrice += taxAmount;
  }

  //  the values when the price is calculated
  setBasicPremium(basicPremium);
  setAdministrationCharge(adminCharge);
  setTotalPrice(totalPrice);

  const countriesWithNote = [
    "United Kingdom",
    "Isle of Man",
    "Guernsey",
    "Jersey",
  ];

  // const count

  const isRequiredFieldSelected =
    selectedCountry && selectedArea && selectedInsuranceType;

  const showNote = countriesWithNote.includes(selectedCountry);

  return (
    <div className="xl:static xl:max-w-[400px] fixed bottom-0 left-0 right-0 bg-white">
      {!isRequiredFieldSelected ? (
        <div className="mt-[30px] border border-[#8CA2B4] py-4 px-4 xl:py-[21px] xl:px-[21px] rounded-[5px] xl:max-h-[200px]">
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
          {/* Loading check */}

          <Collapse isOpened={true}>
            <div className="mt-[30px] border border-[#8CA2B4] py-[21px] px-[21px] rounded-[5px] xl:min-w-[400px]">
              <div>
                <h3 className="xl:text-lg font-bold text-textBlackV2 xl:leading-[30px] border-b border-[#8CA2B4] text-center mb-3 xl:mb-[26px]">
                  Price Details
                </h3>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <div>
                    {" "}
                    <p className="text-center xl:text-left mb-[7px] text-textBlackV2 xl:text-2xl">
                      <span className="font-bold">Price:</span>{" "}
                      {selectedCurrency === "British Pounds"
                        ? `£${totalPrice.toFixed(2)}`
                        : selectedCurrency === "USD"
                        ? `$${totalPrice.toFixed(2)}`
                        : ""}
                    </p>
                    <ul className="text-center xl:text-left xl:leading-[25px]">
                      <li>
                        Basic premium:{" "}
                        {selectedCurrency === "British Pounds"
                          ? `£${priceInGBP}`
                          : selectedCurrency === "USD"
                          ? `$${priceInUSD}`
                          : ""}
                      </li>
                      {selectedCountry === "United Kingdom" && (
                        <li>
                          Insurance premium tax of £
                          {(
                            basicPremium *
                            (parseFloat(priceLogics?.data?.tax) / 100)
                          ).toFixed(2)}{" "}
                          ({parseFloat(priceLogics?.data?.tax)}%)
                        </li>
                      )}

                      <li>
                        An administration charge of{" "}
                        {selectedCurrency === "British Pounds"
                          ? `£${adminCharge.toFixed(2)} `
                          : selectedCurrency === "USD"
                          ? `$${adminCharge.toFixed(2)} `
                          : ""}
                        ({charge}%)
                      </li>
                    </ul>{" "}
                  </div>
                )}
                <div className="flex justify-between mt-3 xl:mt-[21px]">
                  <CommonButton
                    linkUrl="/party-details"
                    className="px-3 py-2 xl:px-7 xl:py-3"
                  >
                    Continue
                  </CommonButton>
                  <CommonButton className="px-3 py-2 xl:px-7 xl:py-3">
                    Save Quote
                  </CommonButton>
                </div>
              </div>
            </div>
          </Collapse>

          <Collapse isOpened={true}>
            {showNote && (
              <div className="mt-4 xl:mt-14 border border-[#8CA2B4] py-4 px-4 xl:py-[21px] xl:px-[21px] rounded-[5px] xl:min-w-[400px]">
                <h3 className="xl:text-lg font-bold text-textBlackV2 xl:leading-[30px] border-b border-[#8CA2B4] text-center mb-1 xl:mb-[7px]">
                  Please note
                </h3>
                <p className="text-center xl:text-left xl:mb-[7px] text-textBlackV2 text-[12px] xl:text-base xl:leading-[25px]">
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
