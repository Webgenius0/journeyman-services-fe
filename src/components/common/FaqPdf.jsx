import PdfIcon from "@/assets/Icons/PdfIcon";
import CommonWrapper from "./CommonWrapper";

const FaqPdf = () => {
  return (
    <CommonWrapper>
      <div className="max-w-[954px] ">
        <h2 className="text-xl leading-[34px] text-center mb-[14px]">
          Click here for Covid-19 Coronavirus travel insurance FAQs
        </h2>
        <div className="h-[190px] border border-[#8CA2B4] py-[22px] px-16 flex justify-evenly items-center rounded-[5px]">
          <div className="flex flex-col items-center w-[200px]">
            <PdfIcon />
            <h3 className="text-sm leading-7 text-textBlackV2 text-center">
              Insurance Product Information Document
            </h3>
          </div>
          <div className="flex flex-col items-center w-[200px]">
            <PdfIcon />
            <h3 className="text-sm leading-7 text-textBlackV2">
              Policy Wording (GBP)
            </h3>
          </div>
          <div className="flex flex-col items-center w-[200px]">
            <PdfIcon />
            <h3 className="text-sm leading-7 text-textBlackV2">
              Terms of Business
            </h3>
          </div>
          <div className="flex flex-col items-center w-[200px]">
            <PdfIcon />
            <h3 className="text-sm leading-7 text-textBlackV2">
              Target Market Statement{" "}
            </h3>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default FaqPdf;
