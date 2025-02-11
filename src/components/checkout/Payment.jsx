import CommonButton from "../common/CommonButton";
import FlexibleInput from "../common/FlexibleInput";
import { useForm } from "react-hook-form";
import FaqPdf from "../common/FaqPdf";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import toast from "react-hot-toast";
import CommonDropdownSelect from "../common/CommonDropdownSelect";
import useFetchData from "@/hooks/api/useFetchData";

const Payment = () => {
  const {
    selectedAdults,
    setSelectedCountry,
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
    age,
    adultArray,
    childrenArray,
    totalPrice,
    selectedTravelTypes,
    broker,
    cancellationCover,
    tripLength,
  } = useTravelDetails();

  const axiosPublic = useAxiosPublic();

  console.log("selectedAdults:", selectedAdults);
  console.log("selectedCountry:", selectedCountry);
  console.log("selectedChildren:", selectedChildren);
  console.log("selectedInsuranceType:", selectedInsuranceType);
  console.log("selectedArea:", selectedArea);
  console.log("policy_type:", tripLength);
  console.log("coverage_type", cancellationCover);
  console.log("date:", date);
  console.log("endDate:", endDate);
  console.log("selectedCurrency:", selectedCurrency);
  console.log("address1:", address1);
  console.log("address2:", address2);
  console.log("zipCode:", zipCode);
  console.log("telephone:", telephone);
  console.log("email:", email);
  console.log("city:", city);
  console.log("message:", message);
  console.log("hear:", hear);
  console.log("age:", age);
  console.log("adultArray:", adultArray);
  console.log("childrenArray:", childrenArray);
  console.log("totalPrice:", totalPrice);
  console.log("selectedTravelTypes:", selectedTravelTypes);
  console.log("broker:", broker);

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

  const { data } = useFetchData("/country/list");
  const countries = data?.data;

  console.log(totalPrice);
  // console.log(priceData)
  const onSubmit = async (data) => {
    // console.log("Form Submitted", data);
    const parsedTotalPrice = parseInt(totalPrice);
    const travelDetails = {
      policy_currency: selectedCurrency,
      country_of_residence: selectedCountry,
      insurance_type: selectedInsuranceType,
      policy_type: selectedType,
      coverage_type: cancellationCover,
      area_of_travel: selectedArea,
      start_date: date,
      end_date: endDate,
      number_of_adults: selectedAdults,
      travel_type: selectedTravelTypes,
      age,
      adults: adultArray.map((adult) => ({
        name: `${adult.title} ${adult.forename} ${adult.surname}`,
        forename: adult.forename,
        surname: adult.surname,
        birth_day: adult.birth_day,
        nationality: adult.nationality,
      })),
      number_of_children: selectedChildren,

      children: childrenArray.map((child) => ({
        name: `${child.forename} ${child.surname}`,
        forename: child.forename,
        surname: child.surname,
        birth_day: child.birth_day,
        nationality: child.nationality,
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
      currency: selectedCurrency == "British Pounds" ? "GBP" : "USD",
      total_price: parsedTotalPrice,
      ...(broker && { broker_id: broker.id }),
    };

    try {
      const response = await axiosPublic.post(
        "/booking/form/submit",
        travelDetails
      );
      // console.log("Response:", response.data.data);
      toast.success("Payment submitted successfully!");
      window.location.href = response.data.data;
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
          <div>
            <CommonDropdownSelect
              label="Nationality"
              options={countries?.map((country) => ({
                value: country.name,
                label: country.name,
              }))}
              placeholder={selectedCountry || "Select Country"}
              defaultValue={selectedCountry}
              value={selectedCountry}
              onChange={(value) => {
                setSelectedCountry(value);
              }}
              width="w-[300px]"
            />
          </div>
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
