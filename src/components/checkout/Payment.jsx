import CommonButton from "../common/CommonButton";
import FlexibleInput from "../common/FlexibleInput";
import { useForm } from "react-hook-form";
import FaqPdf from "../common/FaqPdf";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";

const Payment = () => {
  const {
    selectedAdults,
    selectedChildren,
    selectedInsuranceType,
    selectedArea,
    selectedType,
    selectedCountry,
    date,
    endDate,
    selectedCurrency,
    address1,
    address2,
    zipCode,
    telephone,
    email,
    city,
    message,
    hear,
    title,
    forename,
    surname,
    setSurname,
    priceData,
    age,
  } = useTravelDetails();

  console.log("useTravelDetails", {
    selectedAdults,
    selectedChildren,
    selectedInsuranceType,
    selectedArea,
    selectedType,
    selectedCountry,
    date,
    endDate,
    selectedCurrency,
    address1,
    address2,
    zipCode,
    telephone,
    email,
    city,
    message,
    hear,
    title,
    forename,
    surname,
    priceData,
    age,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address1,
      address2,
      zipCode,
      city,
      selectedCountry,
    },
  });

  // Consolidating the form data into an object
  const onSubmit = (data) => {
    console.log("Form Submitted", data); // Log submitted form data

    const travelDetails = {
      selectedAdults,
      selectedChildren,
      selectedInsuranceType,
      selectedArea,
      selectedType,
      selectedCountry,
      date,
      endDate,
      selectedCurrency,
      address1: data.address1,
      address2: data.address2,
      zipCode: data.zipCode,
      telephone,
      email,
      city: data.city,
      message,
      hear,
      title,
      forename,
      surname,
      priceData,
      age,
    };

    console.log("Consolidated travelDetails", travelDetails); // Log travelDetails object
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
        <FlexibleInput
          label="Address 1"
          type="text"
          name="address1"
          register={register}
          error={errors?.address1}
          validation={{ required: "Address 1 is required" }}
          width="w-[300px]"
        />
        <div className="mt-[26px]">
          <FlexibleInput
            label="Address 2"
            type="text"
            name="address2"
            register={register}
            error={errors?.address2}
            validation={{ required: "Address 2 is required" }}
            width="w-[300px]"
          />
        </div>
        <div className="mt-[26px]">
          <FlexibleInput
            label="Town/City"
            type="text"
            name="city"
            register={register}
            error={errors?.city}
            validation={{ required: "City is required" }}
            width="w-[300px]"
          />
        </div>
        <div className="mt-[26px]">
          <FlexibleInput
            label="Country/Region"
            type="text"
            name="selectedCountry"
            register={register}
            error={errors?.selectedCountry}
            validation={{ required: "Country is required" }}
            width="w-[300px]"
          />
        </div>
        <div className="mt-[26px]">
          <FlexibleInput
            label="Post/Zip code"
            type="text"
            name="zipCode"
            register={register}
            error={errors?.zipCode}
            validation={{ required: "Zip code is required" }}
            width="w-[300px]"
          />
        </div>
        <CommonButton linkUrl="" className="py-3 px-7 mt-[53px]">
          Finish and pay
        </CommonButton>
      </form>
      <FaqPdf />
    </div>
  );
};

export default Payment;
