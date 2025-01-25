import CommonButton from "../common/CommonButton";
import FlexibleInput from "../common/FlexibleInput";
import { useForm } from "react-hook-form";
import FaqPdf from "../common/FaqPdf";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";

const Payment = () => {
  const {
    selectedCurrency,

    date,
  } = useTravelDetails();

  const data = {
    date: date,
    currency: selectedCurrency,
  };

  console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-[74px]">
      <h3 className="text-textBlackV2 font-bold text-lg leading-[30px]">
        Payment
      </h3>
      <p className="text-textBlackV2 leading-[25px]">
        Please enter the details as they appear on your credit/debit card
        statement
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div>
          <FlexibleInput
            label="Address 1"
            type="text"
            name="address1"
            register={register}
            error={errors?.forename}
            validation={{
              required: "Start date is required",
            }}
            width="w-[300px]"
          />
        </div>
        <div className="mt-[26px]">
          <FlexibleInput
            label="Address 2"
            type="text"
            name="address1"
            register={register}
            error={errors?.forename}
            validation={{
              required: "Start date is required",
            }}
            width="w-[300px]"
          />
        </div>
        <div className="mt-[26px]">
          <FlexibleInput
            label="Town/City"
            type="text"
            name="address1"
            register={register}
            error={errors?.forename}
            validation={{
              required: "Start date is required",
            }}
            width="w-[300px]"
          />
        </div>
        <div className="mt-[26px]">
          <FlexibleInput
            label="Country/Region"
            type="text"
            name="address1"
            register={register}
            error={errors?.forename}
            validation={{
              required: "Start date is required",
            }}
            width="w-[300px]"
          />
        </div>
        <div className="mt-[26px]">
          <FlexibleInput
            label="Post/Zip code"
            type="text"
            name="address1"
            register={register}
            error={errors?.forename}
            validation={{
              required: "Start date is required",
            }}
            width="w-[300px]"
          />
        </div>
        <div className="mt-[26px]">
          <FlexibleInput
            label="Post/Zip code"
            type="text"
            name="address1"
            register={register}
            error={errors?.forename}
            validation={{
              required: "Start date is required",
            }}
            width="w-[300px]"
          />
        </div>

        <CommonButton linkUrl="/checkout" className="py-3 px-7 mt-[53px]">
          Finish and pay
        </CommonButton>
      </form>
      <FaqPdf />
    </div>
  );
};

export default Payment;
