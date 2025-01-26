import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import { useForm } from "react-hook-form";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";
import useFetchData from "@/hooks/api/useFetchData";
import { useState } from "react";
import FlexibleInput from "../common/FlexibleInput";

const DetailsField = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [date, setDate] = useState(null);
  const { selectedCountry } = useTravelDetails();
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
              required: "Forename is required",
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
              required: "Surname is required",
            }}
            width="w-full"
          />
        </div>

        <div>
          <label htmlFor="dob" className="block mb-2 text-sm font-semibold">
            Date of Birth
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
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
