import QuestionIcon from "@/assets/Icons/QuestionIcon";
import CommonButton from "@/components/common/CommonButton";
import CommonModal from "@/components/common/CommonModal";
import CommonPageTitle from "@/components/common/CommonPageTitle";
import CommonWrapper from "@/components/common/CommonWrapper";
import FaqPdf from "@/components/common/FaqPdf";
import FlexibleInput from "@/components/common/FlexibleInput";
import DetailsField from "@/components/partydetails/DetailsField";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useForm } from "react-hook-form";

const PartyDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
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

  const onSubmit = (data) => {
    console.log(data);
  };
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
      <div>
        <h3 className="mb-3 mt-6 xl:mt-8 xlg:text-lg font-bold">Adults</h3>
        <DetailsField title="Adult 1" />
      </div>
      <div className="mt-4">
        <DetailsField title="Adult 2" />
      </div>
      <div className="mt-8">
        <h3 className="mb-3 mt-8 xl:text-lg font-bold">Childrens</h3>
        <DetailsField title="Children 1" />
      </div>
      <div className="mt-4">
        <DetailsField title="Children 2" />
      </div>
      {/* residentital address */}
      <div className="mt-6 xl:mt-[130px]">
        <h3 className="xlg:text-lg font-bold xl:leading-[30px] mb-[6px]">
          Current residentital address
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Address 2"
              type="text"
              name="address1"
              register={register}
              error={errors?.forename}
              validation={{
                required: "Start date is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Town/City"
              type="text"
              name="address1"
              register={register}
              error={errors?.forename}
              validation={{
                required: "Start date is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Country/Region"
              type="text"
              name="address1"
              register={register}
              error={errors?.forename}
              validation={{
                required: "Start date is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Post/Zip code"
              type="text"
              name="address1"
              register={register}
              error={errors?.forename}
              validation={{
                required: "Start date is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Post/Zip code"
              type="text"
              name="address1"
              register={register}
              error={errors?.forename}
              validation={{
                required: "Start date is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Post/Zip code"
              type="text"
              name="address1"
              register={register}
              error={errors?.forename}
              validation={{
                required: "Start date is required",
              }}
              width="xl:w-[300px]"
            />
          </div>
          <div className="mt-3 xl:mt-[26px]">
            <FlexibleInput
              label="Address 1"
              type="text"
              name="address1"
              register={register}
              error={errors?.forename}
              validation={{
                required: "Start date is required",
              }}
              width="xl:w-[300px]"
              underText='If you do not have a post/zip code, please enter "0000" '
            />
          </div>
          {/* policies */}
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

          {/* checkbox */}
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
         <CommonButton linkUrl="/checkout" className="py-3 px-7 mt-[53px]">
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
