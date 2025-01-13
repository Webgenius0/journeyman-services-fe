import InsuranceDetails from "@/components/checkout/InsuranceDetails";
import CommonPageTitle from "@/components/common/CommonPageTitle";
import CommonWrapper from "@/components/common/CommonWrapper";

const CheckOut = () => {
  return (
    <CommonWrapper>
      <CommonPageTitle>Online travel insurance</CommonPageTitle>
      <div className="mt-[14.4px]">
        <h3 className="text-lg font-bold text-textBlack leading-[30px]">
          Finish and pay
        </h3>
        <p className="mt-3 leading-[25px]">
          Please enter the details of your party:
        </p>
      </div>{" "}
      <InsuranceDetails />{" "}
    </CommonWrapper>
  );
};

export default CheckOut;
