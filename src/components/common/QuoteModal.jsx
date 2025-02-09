import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CrossIcon from "@/assets/Icons/CrossIcon";
import CommonButton from "./CommonButton";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import toast from "react-hot-toast";

const QuoteModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const {
    selectedInsuranceType,
    selectedArea,
    selectedCountry,
    date,
    endDate,
    selectedCurrency,
    totalPrice,
    cancellationCover,
    tripLength,
  } = useTravelDetails();
  const axiosPublic = useAxiosPublic();

  // Set default value for contact checkbox to true
  useEffect(() => {
    setValue("contact", true);
  }, [setValue]);

  const onSubmit = (data) => {
    // console.log(data);

    const requestData = {
      email: data.email,
      name: data.name,
      policy_currency: selectedCurrency,
      currency: selectedCurrency == "British Pounds" ? "GBP" : "USD",
      country_of_residence: selectedCountry,
      insurance_type: selectedInsuranceType,
      policy_type: tripLength,
      coverage_type: cancellationCover,
      area_of_travel: selectedArea,
      start_date: date,
      end_date: endDate,
      total_price: totalPrice,
      if_contact: data.contact ? true : false,
    };
    console.log(requestData);

    // POST the data to the server
    axiosPublic
      .post("/booking/form/quote", requestData)
      .then((response) => {
        console.log("Quote saved successfully:", response.data);
        toast.success(`Thank you for saving your travel insurance quote from Journeyman.
We have sent you an email to ${data.email}`);
        reset();
      })
      .catch((error) => {
        console.error("Error saving quote:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <CrossIcon className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 border-b pb-4">
            Save Your Quote
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Please enter your name and email address to save this quote. Quotes
            are valid during the calendar month in which they are produced. We
            will email you with the details of your quote and instructions on
            how to retrieve it.
          </p>

          {/* Name Input */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-1/2 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-1/2 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none "
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <CommonButton
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="px-4 py-2 text-white font-semibold rounded-md"
            >
              Save Quote
            </CommonButton>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-sm text-gray-500">
            Please note: Discounts are not saved.
          </p>

          {/* Contact Preference */}
          <div className="mt-6 flex items-start">
            <input
              type="checkbox"
              {...register("contact")}
              className="mt-1 mr-3"
            />
            <label className="text-sm text-gray-600">
              From time to time, we may contact you with offers and promotions.
              Please untick this checkbox if you do not wish us to contact you
              in the future.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
