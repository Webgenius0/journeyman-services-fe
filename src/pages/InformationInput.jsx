import CommonPageTitle from "@/components/common/CommonPageTitle";
import CommonWrapper from "@/components/common/CommonWrapper";
import FaqPdf from "@/components/common/FaqPdf";
import PriceDetails from "@/components/InformationInput/PriceDetails";
import TravelDetails from "@/components/InformationInput/TravelDetails";

const InformationInput = () => {
  return (
    <CommonWrapper>
      <CommonPageTitle>Online travel insurance</CommonPageTitle>
      <div className="max-w-[1047px] flex justify-between">
        <TravelDetails />
        <PriceDetails />
      </div>
      <FaqPdf />
    </CommonWrapper>
  );
};

export default InformationInput;
