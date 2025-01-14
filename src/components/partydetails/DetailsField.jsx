import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import FlexibleInput from "../common/FlexibleInput";
import { useForm } from "react-hook-form";

const DetailsField = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-[#B8B6B5] rounded-[8px] p-5 xl:pt-[27px] xl:pb-[43px] xl:pr-[35px] xl:pl-[54px]"
    >
      <h3 className="text-textBlackV2 leading-[25px] mb-3">{title}</h3>
      <div className="grid grid-cols-1 xl:grid-cols-5 items-center gap-6 ">
        <div>
          <CommonDropdownSelect
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
            ]}
            label="Title"
            placeholder="Mr."
            onChange={(value) => console.log(value)}
          />
        </div>
        <div>
          <FlexibleInput
            label="Forename"
            type="text"
            name="forename"
            register={register}
            error={errors?.forename}
            validation={{
              required: "Start date is required",
            }}
            width="w-full"
          />
        </div>
        <div>
          <FlexibleInput
            label="Surname"
            type="text"
            name="surname"
            register={register}
            error={errors?.surname}
            validation={{
              required: "Start date is required",
            }}
            width="w-full"
          />
        </div>
        <div>
          <FlexibleInput
            label="Date of birth"
            type="date"
            name="dob"
            register={register}
            error={errors?.dob}
            validation={{
              required: "Start date is required",
            }}
            width="w-full"
          />
        </div>
        <div>
          <CommonDropdownSelect
            options={[
              { value: "option1", label: "America" },
              { value: "option2", label: "Option 2" },
            ]}
            label="Nationality"
            placeholder="America"
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
    </form>
  );
};

export default DetailsField;
