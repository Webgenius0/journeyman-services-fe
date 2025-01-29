import { useForm } from "react-hook-form";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import FlexibleInput from "../common/FlexibleInput";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import useFetchData from "@/hooks/api/useFetchData";
import { useCallback, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [birthdate, setBirthDate] = useState(dob ? new Date(dob) : null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm();

  const handleDateChange = (date) => {
    setBirthDate(date);
    const formattedDate = date.toLocaleDateString("en-GB");
    setDob(formattedDate);
    setValue("birth_day", formattedDate);
    trigger("birth_day");
  };
  console.log(dob);

  const onSubmit = useCallback(
    (data) => {
      const formValues = {
        ...data,
        person: person,
        id: `${person}-${indexValue}`,
        title: selectedTitle,
      };

      if (formValues.person === "adults") {
        setAdultArray((prevArray) => {
          const filteredArray = prevArray.filter(
            (item) => item.id !== formValues.id
          );
          return [...filteredArray, formValues];
        });
      } else {
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
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <DatePicker
            selected={birthdate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="w-full p-2 border border-gray-300 rounded-md"
            showYearDropdown
            dropdownMode="select"
            maxDate={person === "children" ? new Date() : null}
            minDate={
              person === "adults"
                ? new Date(
                    new Date().setFullYear(new Date().getFullYear() - 100)
                  )
                : null
            }
          />
          {errors.birth_day && (
            <p className="text-red-500 text-sm mt-1">
              {errors.birth_day.message}
            </p>
          )}
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
      </div>
    </form>
  );
};

export default DetailsField;
