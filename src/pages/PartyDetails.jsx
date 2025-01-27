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
    setHear,
    setSubmitForm,
  } = useTravelDetails();
  const { data } = useFetchData("/country/list");
  const countries = data?.data;

  // Handle form submission
  const onSubmit = (data) => {
    // Store data in TravelDetailsProvider context
    setSelectedCountry(data.country || selectedCountry );
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

  // submitting all the form togeter


  console.log('party details country',selectedCountry)

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
              <DetailsField
                title={`Adult ${index + 1}`}
                person="adults"
                indexValue={index + 1}
              />
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
              <DetailsField
                title={`Children ${index + 1}`}
                person="childrens"
                indexValue={index + 1}
              />
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
              label="Nationality"
              options={countries?.map((country) => ({
                value: country.name,
                label: country.name,
              }))}
              placeholder={selectedCountry || "Select Country"}
              defaultValue={selectedCountry}
              value={selectedCountry}
              onChange={setSelectedCountry}
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
          {/* Policy Information */}
          <div className="py-4 xl:py-[26px]">
            <h3 className="text-textBlackV2">
              Please read the{" "}
              <span className="underline">Key Facts document</span>,{" "}
              <span className="underline">Policy Wording (USD)</span> and{" "}
              <span className="underline">Terms of Business</span>, as we intend
              to rely on you having read this information.
              <ul className="text-sm xl:text-base list-disc pl-4 xl:pl-6 xl:leading-[25px] text-textBlackV2">
                <li>
                  I confirm that the answers in any proposal and declaration for
                  this insurance are true and complete to the best of my
                  knowledge and belief. Such proposals and declarations form the
                  basis of this contract.
                </li>
                <li>
                  I, or any person on whose behalf payment is claimed, will
                  observe the terms and conditions of the Policy. I understand
                  that any known facts and any changes affecting the risk after
                  the Policy&apos;s inception or last renewal date must be
                  disclosed. Failure to disclose such facts or changes may mean
                  that this Policy will not provide the required cover or may
                  invalidate the Policy altogether.
                </li>
                <li>
                  I, and any other person listed, will take all reasonable steps
                  to prevent accidents, injuries, illnesses, diseases, losses,
                  or damages.
                </li>
                <li>
                  I have read and accept the policy terms and conditions as laid
                  out in the Key Facts document, Policy Wording, Terms of
                  Business, and declarations above. I am happy to proceed on
                  this understanding.
                </li>
              </ul>
            </h3>
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

          <div
            onClick={() => setSubmitForm(true)}
            className="flex justify-center xl:justify-normal"
          >
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
