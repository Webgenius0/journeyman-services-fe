import QuestionIcon from "@/assets/Icons/QuestionIcon";
import CommonButton from "@/components/common/CommonButton";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import CommonModal from "@/components/common/CommonModal";
import CommonPageTitle from "@/components/common/CommonPageTitle";
import CommonWrapper from "@/components/common/CommonWrapper";
import FaqPdf from "@/components/common/FaqPdf";
import FlexibleInput from "@/components/common/FlexibleInput";
import DetailsField from "@/components/partydetails/DetailsField";
import { Checkbox } from "@/components/ui/checkbox";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import useFetchData from "@/hooks/api/useFetchData";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PartyDetails = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const {
    selectedAdults,
    selectedChildren,
    selectedCountry,
    setSelectedCountry,
    setAddress1,
    setAddress2,
    setZipCode,
    setTelephone,
    setEmail,
    setCity,
    setMessage,
    hear,
    setHear
  } = useTravelDetails();
  const { data } = useFetchData("/country/list");
  const countries = data?.data;

  // Handle form submission
  const onSubmit = (data) => {
    // Store data in TravelDetailsProvider context
    setSelectedCountry(data.country);
    setAddress1(data.address1);
    setAddress2(data.address2);
    setCity(data.townCity);
    setZipCode(data.zipCode);
    setTelephone(data.telephone);
    setEmail(data.email);
    setMessage(data.message);
    setHear(data.hear);

    if (!Object.keys(errors).length) {
      navigate("/checkout");
    }
  };
  

  const modalContent = [
    {
      title: "Standard Policy Activities",
      content:
        "This policy covers activities such as hiking, cycling, and swimming. Please refer to the full terms and conditions for more details.",
    },
  ];

  const openModal = (content) => {
    setModalData(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <CommonWrapper>
      <CommonPageTitle>Online travel insurance</CommonPageTitle>
      <div className="mt-[14.4px]">
        <h3 className="text-center xl:text-left text-lg font-bold text-textBlack xl:leading-[30px]">
          Party Details
        </h3>
        <p className="text-center xl:text-left mt-3 xl:leading-[25px]">
          Please enter the details of your party:
        </p>
      </div>

      {/* Adult Details */}
      {selectedAdults > 0 && (
        <div>
          <h3 className="mb-3 mt-6 xl:mt-8 xlg:text-lg font-bold">Adults</h3>
          {Array.from({ length: selectedAdults }).map((_, index) => (
            <div key={`adult-${index}`} className={index > 0 ? "mt-4" : ""}>
              <DetailsField title={`Adult ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

      {/* Children Details */}
      {selectedChildren > 0 && (
        <div className="mt-8">
          <h3 className="mb-3 mt-8 xl:text-lg font-bold">Children</h3>
          {Array.from({ length: selectedChildren }).map((_, index) => (
            <div key={`children-${index}`} className={index > 0 ? "mt-4" : ""}>
              <DetailsField title={`Children ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

      {/* all the address information */}
      {/* Residential Address */}
      <div className="mt-6 xl:mt-[130px]">
        <h3 className="xlg:text-lg font-bold xl:leading-[30px] mb-[6px]">
          Current residential address
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <FlexibleInput
              label="Address 1"
              type="text"
              name="address1"
              register={register}
              error={errors?.address1}
              validation={{
                required: "Address 1 is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Address 2"
              type="text"
              name="address2"
              register={register}
              error={errors?.address2}
              validation={{
                required: "Address 2 is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Town/City"
              type="text"
              name="townCity"
              register={register}
              error={errors?.townCity}
              validation={{
                required: "Town/City is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <CommonDropdownSelect
              options={countries?.map((country) => ({
                value: country.code,
                label: country.name,
              }))}
              label="Nationality"
              placeholder={selectedCountry || "Select Country"}
              defaultValue={selectedCountry}
              onChange={(value) => setSelectedCountry(value)}
              width="w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Post/Zip code"
              type="text"
              name="zipCode"
              register={register}
              error={errors?.zipCode}
              validation={{
                required: "Zip code is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          {/* telephone */}
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Telephone"
              type="number"
              name="telephone"
              register={register}
              error={errors?.telephone}
              validation={{
                required: "Telephone is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          {/* email */}
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Email:"
              type="email"
              name="email"
              register={register}
              error={errors?.email}
              validation={{
                required: "Email is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <CommonDropdownSelect
              options={[
                { value: "0", label: "Search Engine" },
                { value: "1", label: "Agent-Broker-Intermediary" },
                { value: "2", label: "Employer-Colleague-Friend" },
                { value: "3", label: "Advertisement-Leaflet" },
                { value: "4", label: "Other..." },
              ]}
              label="How did you hear about Journeyman ?"
              placeholder={"Select"}
              onChange={setHear}
              value={hear}
              width="w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Please specify"
              type="text"
              name="message"
              register={register}
              width="xl:w-[300px]"
              textarea
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I have read and accept the policy terms & conditions as laid out
              in the Key Facts document, Policy Wording, Terms of Business and
              declarations above. I am happy to proceed on this understanding.
            </label>
          </div>

          <div className="flex gap-3 mt-7">
            <p className="text-textBlackV2 leading-[25px]">
              Important Information
            </p>
            <div
              className="bg-[#8CA2B4] h-6 w-6 rounded-full flex justify-center items-center"
              onClick={() => openModal(modalContent[0])}
            >
              <QuestionIcon />
            </div>
          </div>

          <div className="flex justify-center xl:justify-normal">
            <CommonButton type="submit" className="py-3 px-7 mt-[53px]">
              Continue
            </CommonButton>
          </div>
        </form>
        <FaqPdf />
      </div>
      <CommonModal
        isOpen={isModalOpen}
        content={modalData}
        onClose={closeModal}
      />
    </CommonWrapper>
  );
};

export default PartyDetails;
