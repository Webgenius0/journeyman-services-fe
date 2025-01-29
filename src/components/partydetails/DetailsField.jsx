import { useForm } from "react-hook-form";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import FlexibleInput from "../common/FlexibleInput";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import useFetchData from "@/hooks/api/useFetchData";
import { useCallback, useEffect, useRef, useState } from "react";

const DetailsField = ({ title, person, indexValue }) => {
  const {
    selectedCountry,
    setSelectedCountry,
    setTitle,
    setForename,
    setSurname,
    setDob,
    dob,
    setAge,
    submitForm,
    adultArray,
    childrenArray,
    setAdultArray,
    setChildrenArray,
  } = useTravelDetails();
  const [selectedTitle, setSelectedTitle] = useState("Mr");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const [year, month, day] = selectedDate.split("-");
    const formattedDate = `${day}/${month}/${year}`;
    setDob(formattedDate);
  };


  const validateAdultAge = (date) => {
    if (person === "adults") {
      const today = new Date();
      const birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= 16 || "Adults must be at least 16 years old.";
    }
    return true;
  };
  // console.log(dob);
  // entire submit function
  const onSubmit = useCallback(
    (data) => {
      const formValues = {
        ...data,
        person: person,
        id: `${person}-${indexValue}`,
        title: selectedTitle,
      };

      // console.log(formValues);

      if (formValues.person === "adults") {
        // Update the adult array
        setAdultArray((prevArray) => {
          const filteredArray = prevArray.filter(
            (item) => item.id !== formValues.id
          );
          return [...filteredArray, formValues];
        });
      } else {
        // Update the children array
        setChildrenArray((prevArray) => {
          const filteredArray = prevArray.filter(
            (item) => item.id !== formValues.id
          );
          return [...filteredArray, formValues];
        });
      }
    },
    [person, indexValue, setAdultArray, setChildrenArray, selectedTitle]
  );

  console.log("from details field", adultArray);

  useEffect(() => {
    if (submitForm) {
      handleSubmit(onSubmit)();
    }
  }, [submitForm, handleSubmit, onSubmit]);



  const { data } = useFetchData("/country/list");
  const countries = data?.data;

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
              { value: "Mr", label: "Mr" },
              { value: "Mrs", label: "Mrs" },
              { value: "Ms", label: "Ms" },
              { value: "Miss", label: "Miss" },
            ]}
            label="Title"
            placeholder="Mr."
            onChange={(value) => setSelectedTitle(value)}
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
              required: "Forename is required",
            }}
            width="w-full"
            onChange={(e) => {
              setForename(e.target.value);
            }}
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
              required: "Surname is required",
            }}
            width="w-full"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
        </div>

        <div>
          <FlexibleInput
            label="Date of Birth"
            type="date"
            name="birth_day"
            register={register}
            error={errors?.birth_day}
            validation={{
              required: "Date of Birth is required",
            }}
            width="w-full"
            onChange={handleDateChange}
          />
        </div>

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
              setValue("nationality", value);
              setSelectedCountry(value);
            }}
          />
        </div>

        {/* Submit button */}
        {/* <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button> */}
      </div>
    </form>
  );
};

export default DetailsField;
