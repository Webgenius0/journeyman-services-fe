import InsuranceDetails from "@/components/checkout/InsuranceDetails";
import PartyDetails from "@/components/checkout/PartyDetails";
import Payment from "@/components/checkout/Payment";
import PolicyPrice from "@/components/checkout/PolicyPrice";
import CommonPageTitle from "@/components/common/CommonPageTitle";
import CommonWrapper from "@/components/common/CommonWrapper";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";

const CheckOut = () => {
  const {
    address1,
    address2,
    selectedAdults,
    selectedChildren,
    selectedCountry,
    zipCode,
    telephone,
    email,
    city,
    message,
    hear,
    childrenArray
  } = useTravelDetails();

  // console.log({
  //   address1,
  //   address2,
  //   selectedAdults,
  //   selectedChildren,
  //   selectedCountry,
  //   zipCode,
  //   telephone,
  //   email,
  //   city,
  //   message,
  //   hear,
  // });

  console.log(childrenArray);
  return (
    <CommonWrapper>
      <CommonPageTitle>Online travel insurance</CommonPageTitle>
      <div className="mt-[14.4px]">
        <h3 className="text-center xl:text-left xl:text-lg font-bold text-textBlack xl:leading-[30px]">
          Finish and pay
        </h3>
        <p className="text-sm xl:text-base text-center xl:text-left mt-3 xl:leading-[25px]">
          Please enter the details of your party:
        </p>
      </div>
      <InsuranceDetails />
      <PartyDetails />
      <PolicyPrice />
      <Payment />
    </CommonWrapper>
  );
};

export default CheckOut;
