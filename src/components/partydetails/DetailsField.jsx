import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import FlexibleInput from "../common/FlexibleInput";
import { useForm } from "react-hook-form";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import useFetchData from "@/hooks/api/useFetchData";

const DetailsField = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const { selectedCountry } = useTravelDetails();
  const { data } = useFetchData("/country/list");
  const countries = data?.data;
  console.log(selectedCountry);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-[#B8B6B5] rounded-[8px] p-5 xl:pt-[27px] xl:pb-[43px] xl:pr-[35px] xl:pl-[54px]"
    >
      <h3 className="text-textBlackV2 xl:leading-[25px] mb-3">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 2xl:grid-cols-5 items-center gap-6 ">
        <div>
          <CommonDropdownSelect
            options={[
              { value: "option1", label: "Mr" },
              { value: "option2", label: "Mrs" },
              { value: "option3", label: "Ms" },
              { value: "option4", label: "Miss" },
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
            options={countries?.map((country) => ({
              value: country.code,
              label: country.name,
            }))}
            label="Nationality"
            placeholder={selectedCountry || "Select Country"}
            defaultValue={selectedCountry}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
    </form>
  );
};

export default DetailsField;
