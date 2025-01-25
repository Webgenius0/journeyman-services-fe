import CommonPageTitle from "@/components/common/CommonPageTitle";
import CommonWrapper from "@/components/common/CommonWrapper";
import FaqPdf from "@/components/common/FaqPdf";
import PriceDetails from "@/components/InformationInput/PriceDetails";
import TravelDetails from "@/components/InformationInput/TravelDetails";

const InformationInput = () => {
  return (
    <CommonWrapper>
      <CommonPageTitle>Online travel insurance</CommonPageTitle>
      <div className="xl:max-w-[1047px] flex flex-col xl:flex-row justify-between">
        {/* Travel Details */}
        <div className="flex-1">
          <TravelDetails />
        </div>

        {/* Sticky Price Details */}
        <div className="xl:w-[400px] xl:ml-8">
          <div className="sticky top-28">
            <PriceDetails />
          </div>
        </div>
      </div>
      <FaqPdf />
    </CommonWrapper>
  );
};

export default InformationInput;
