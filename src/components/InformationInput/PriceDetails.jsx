import CommonButton from "../common/CommonButton";

const PriceDetails = () => {
  return (
    <div className="max-w-[400px]">
      {/* quote */}
      <div className="mt-[30px] border border-[#8CA2B4] py-[21px] px-[21px] rounded-[5px]  max-h-[200px]">
        <h3 className="text-lg font-bold text-textBlackV2 leading-[30px] border-b border-[#8CA2B4] text-center mb-[7px]">
          Your Quote
        </h3>
        <p className="mb-[7px]">
          To get your quote, please fill in a minimum of:
        </p>
        <ul>
          <li>• Country of residence</li>
          <li>• Insurance type</li>
          <li>• Area of travel</li>
        </ul>
      </div>
      {/* price details */}
      <div className="mt-[30px] border border-[#8CA2B4] py-[21px] px-[21px] rounded-[5px] min-w-[400px]">
        <h3 className="text-lg font-bold text-textBlackV2 leading-[30px] border-b border-[#8CA2B4] text-center mb-[7px]">
          Price Details
        </h3>
        <p className="mb-[7px] text-textBlackV2">
          <span className="font-bold">Price:</span> $132.33
        </p>
        <ul className="leading-[25px]">
          <li>The Price includes</li>
          <li>Basic premium: $126</li>
          <li>An administration charge of $4.54 (3.5%)</li>
        </ul>
        <div className="flex justify-between mt-[21px]">
          <CommonButton className="px-7 py-3">Continue</CommonButton>
          <CommonButton className="px-7 py-3">Save Quote</CommonButton>
        </div>
        <div className="mt-14">
          <h3 className="text-lg font-bold text-textBlackV2 leading-[30px] border-b border-[#8CA2B4] text-center mb-[7px]">
            Please note
          </h3>
          <p className="mb-[7px] text-textBlackV2 leading-[25px]">
          Pre-existing conditions are not covered under the terms and conditions of Journeyman policies. If you are seeking travel insurance that would provide cover for a pre-existing condition the Money and Pensions Service (MaPS) has launched a travel insurance directory on its Money Advice Service website which can be found here and details providers which can offer travel insurance inclusive of pre-existing conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
