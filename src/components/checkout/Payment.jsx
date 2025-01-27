import axios from "axios";
import CommonButton from "../common/CommonButton";
import FlexibleInput from "../common/FlexibleInput";
import { useForm } from "react-hook-form";
import FaqPdf from "../common/FaqPdf";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import toast from "react-hot-toast";

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
    priceData,
    age,
    adultArray,
    childrenArray,
    dob
  } = useTravelDetails();

  const axiosPublic = useAxiosPublic();

  console.log(adultArray, childrenArray)

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
const totalPrice = priceData?.data.price_in_dollar;
  console.log(priceData)
  const onSubmit = async (data) => {
    console.log("Form Submitted", data);

    const travelDetails = {
      policy_currency: selectedCurrency,
      country_of_residence: selectedCountry || "Bangladesh",
      insurance_type: selectedInsuranceType,
      policy_type: selectedType,
      coverage_type: "standard",
      area_of_travel: selectedArea,
      start_date: date,
      end_date: endDate,
      number_of_adults: selectedAdults,
      age,
      adults: adultArray.map((adult) => ({
        name: `${adult.forename} ${adult.surname}`,
        forename: adult.forename,
        surname: adult.surname,
        birth_day: adult.dob,
        nationality: adult.nationality || "N/A",
      })),
      number_of_children: selectedChildren,
      travel_type: ["winter", "adventure"],
      children: childrenArray.map((child) => ({
        name: `${child.forename} ${child.surname}`,
        forename: child.forename,
        surname: child.surname,
        birth_day: child.dob,
        nationality: child.nationality || "N/A",
      })),
      address_one: data.address1,
      address_two: data.address2,
      city: data.city,
      zip_code: data.zipCode,
      telephone,
      email,
      country: selectedCountry,
      how_know: hear,
      comments: message,
      currency: selectedCurrency,
      total_price: totalPrice || 450,
    };

    try {
      const response = await axiosPublic.post(
        "/booking/form/submit",
        travelDetails
      );
      console.log("Response:", response.data);
      toast.success("Payment submitted successfully!");
    } catch (error) {
      console.error("Error submitting payment:", error);
      toast.error("Failed to submit payment. Please try again.");
    }
    console.log(travelDetails);
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
        <CommonButton type="submit" linkUrl="" className="py-3 px-7 mt-[53px]">
          Finish and pay
        </CommonButton>
      </form>
      <FaqPdf />
    </div>
  );
};

export default Payment;
