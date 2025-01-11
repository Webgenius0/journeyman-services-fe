import { useForm } from "react-hook-form";
import CommonFieldWrapper from "@/components/common/CommonFieldWrapper";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import CommonRadioButton from "../common/CommonRadioButton";
import FlexibleInput from "../common/FlexibleInput";
import QuestionIcon from "@/assets/Icons/QuestionIcon";

const TravelDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="mt-[14px]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[565px] space-y-5">
        <h3 className="mb-6 text-lg font-semibold">Travel Details</h3>

        {/* Country of Residence */}
        <div>
          <CommonFieldWrapper label="Country of Residence">
            <CommonDropdownSelect
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
              placeholder="Please Select"
              onChange={(value) => console.log(value)}
            />
          </CommonFieldWrapper>
        </div>

        {/* Insurance Type */}
        <div>
          <CommonFieldWrapper label="Insurance Type">
            <CommonRadioButton
              options={[
                { value: "light", label: "Annual multi-trip" },
                { value: "dark", label: "Single trip" },
              ]}
              onChange={(value) => console.log(value)}
              defaultValue="light"
            />
          </CommonFieldWrapper>
        </div>

        {/* Area of Travel */}
        <div>
          <CommonFieldWrapper label="Area of travel">
            <CommonRadioButton
              options={[
                { value: "light", label: "Worldwide" },
                {
                  value: "dark",
                  label: "Worldwide (excluding USA, Canada & Caribbean)",
                },
              ]}
              onChange={(value) => console.log(value)}
              defaultValue="light"
            />
          </CommonFieldWrapper>
        </div>

        {/* Form Input Fields */}
        <div>
          <FlexibleInput
            label="Start Date"
            type="date"
            name="startDate"
            placeholder="Select start date"
            register={register}
            error={errors?.startDate}
            validation={{
              required: "Start date is required",
            }}
            width="w-[300px]"
            required
          />
        </div>
        <div>
          <FlexibleInput
            label="Number of adults"
            type="text"
            name="fullName"
            placeholder="1"
            register={register}
            error={errors?.adults}
            validation={{
              required: "Number of adults is required",
            }}
            width="w-[100px]"
            required
            underText="(18-79 years)"
          />
        </div>

        <div>
          <FlexibleInput
            label="What age is the oldest insured party?"
            type="number"
            name="age"
            placeholder="Less than 50"
            register={register}
            error={errors?.age}
            validation={{
              required: "End date is required",
            }}
            width="w-1/2"
            required
            underText="(How old is the eldest person being insured on this policy on the proposed start date above?)"
          />
        </div>
        <div>
          <FlexibleInput
            label="Number of children"
            type="number"
            name="children"
            placeholder="0"
            register={register}
            error={errors?.adults}
            validation={{
              required: "Number of children is required",
            }}
            width="w-[100px]"
            required
            underText="(Dependent children up to 21 years of age and still in full time education)"
          />
        </div>
        {/* Insurance Type */}
        <div>
          <CommonRadioButton
            options={[
              { value: "light", label: "Winter Sports?" },
              { value: "dark", label: "Adventurer Sports?" },
            ]}
            onChange={(value) => console.log(value)}
            defaultValue="light"
          />
        </div>
      </form>
      <div className="flex gap-3 mt-7">
        <p className="text-textBlackV2 leading-[25px]">
          Click here to view activities covered in the &apos;standard&apos;
          policy{" "}
        </p>
        <div className="bg-[#8CA2B4] h-6 w-6 rounded-full flex justify-center items-center">
          <QuestionIcon />
        </div>
      </div>
      <div className="flex gap-3 mt-7">
        <p className="text-textBlackV2 leading-[25px]">
          Click here to view activities covered in the &apos;Adventure
          sports&apos; policy{" "}
        </p>
        <div className="bg-[#8CA2B4] h-6 w-6 rounded-full flex justify-center items-center">
          <QuestionIcon />
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
