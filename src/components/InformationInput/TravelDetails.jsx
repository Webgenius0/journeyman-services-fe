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
import { useForm } from "react-hook-form";
import CommonFieldWrapper from "@/components/common/CommonFieldWrapper";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import CommonRadioButton from "../common/CommonRadioButton";
import { useEffect, useState } from "react";
import CommonModal from "../common/CommonModal";
import { Collapse } from "react-collapse";
import QuestionIcon from "@/assets/Icons/QuestionIcon";
import useFetchData from "@/hooks/api/useFetchData";
import { useTravelDetails } from "@/contexts/TravelDetailsProvider";

const TravelDetails = () => {
  const {
    selectedAdults,
    setSelectedAdults,
    selectedChildren,
    setSelectedChildren,
    selectedInsuranceType,
    setSelectedInsuranceType,
    selectedArea,
    setSelectedArea,
    selectedCurrency,
    setSelectedCurrency,
    selectedCountry,
    setSelectedCountry,
    date,
    setDate,
    endDate,
    setEndDate,
  } = useTravelDetails();

  console.log(
    selectedAdults,
    selectedArea,
    selectedInsuranceType,
    date,
    endDate,
    selectedCountry
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { data } = useFetchData("/country/list");
  const countries = data?.data;
  console.log(selectedCountry);
  

  const [availableAreas, setAvailableAreas] = useState([
    { value: "worldwide", label: "Worldwide" },
    {
      value: "worlwide_ex_usa",
      label: "Worldwide (excluding USA, Canada & Caribbean)",
    },
    { value: "europe", label: "Europe Only" },
  ]);

  useEffect(() => {
    if (selectedCountry) {
      const selectedCountryData = countries?.find(
        (country) => country.name === selectedCountry
      );
      const continent = selectedCountryData?.continent?.toLowerCase();

      // options for area of travel
      let areaOptions = [
        { value: "worldwide", label: "Worldwide" },
        {
          value: "worlwide_ex_usa",
          label: "Worldwide (excluding USA, Canada & Caribbean)",
        },
        { value: "europe", label: "Europe Only" },
      ];

      if (continent === "europe") {
        areaOptions = [
          { value: "worldwide", label: "Worldwide" },
          {
            value: "worlwide_ex_usa",
            label: "Worldwide (excluding USA, Canada & Caribbean)",
          },
          { value: "europe", label: "Europe Only" },
        ];
      } else if (continent?.includes("america")) {
        areaOptions = [{ value: "worldwide", label: "Worldwide" }];
      } else {
        areaOptions = [
          { value: "worldwide", label: "Worldwide" },
          { value: "europe", label: "Europe Only" },
        ];
      }

      setAvailableAreas(areaOptions);
    }
  }, [selectedCountry, countries]);

  const handleAdultsChange = (value) => {
    setSelectedAdults(value);
  };

  const handleChildrenChange = (value) => {
    setSelectedChildren(value);
  };

  const modalContent = [
    {
      title: "Standard Policy Activities",
      content:
        "This policy covers activities such as hiking, cycling, and swimming. Please refer to the full terms and conditions for more details.",
    },
    {
      title: "Adventure Sports Policy",
      content:
        "This policy covers activities such as bungee jumping, paragliding, and rock climbing. Please refer to the full terms and conditions for more details.",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const openModal = (content) => {
    setModalData(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleInsuranceTypeChange = (value) => {
    setSelectedInsuranceType(value);
    if (value !== "single") {
      setEndDate(null);
    }
  };

  return (
    <div className="mt-[14px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="xl:w-[565px] space-y-5"
      >
        <h3 className="mb-6 text-lg font-semibold">Travel Details</h3>

        <div>
          <CommonDropdownSelect
            options={[
              { value: "British Pounds", label: "British Pounds" },
              { value: "USA Dollars", label: "USA Dollars" },
            ]}
            placeholder="British Pounds"
            label="Policy Currency"
            value={selectedCurrency}
            onChange={(value) => {
              setSelectedCurrency(value);
            }}
          />
        </div>

        {/* Country of Residence */}
        <div>
          <CommonFieldWrapper
            label="Country of Residence"
            modalContent={modalContent[0]}
          >
            <CommonDropdownSelect
              options={countries?.map((country) => ({
                value: country.name,
                label: country.name,
              }))}
              placeholder="Please Select"
              value={selectedCountry}
              onChange={setSelectedCountry}
              underText="(This is your home country and not the country that you are visiting)"
            />
          </CommonFieldWrapper>
        </div>

        {/* Insurance Type */}
        <div>
          <CommonFieldWrapper
            label="Insurance Type"
            modalContent={modalContent[0]}
          >
            <CommonRadioButton
              options={[
                { value: "annual", label: "Annual multi-trip" },
                { value: "single", label: "Single trip" },
              ]}
              onChange={handleInsuranceTypeChange}
              value={selectedInsuranceType}
            />

            {/* Nested Fields only for "Annual multi-trip" */}
            <Collapse isOpened={selectedInsuranceType === "annual"}>
              <div className="ml-4 mt-3 border p-4 rounded-md ">
                <CommonRadioButton
                  options={[
                    {
                      value: "summer",
                      label:
                        "Standard - 90 days per trip (45 days for over 74s)",
                    },
                    { value: "winter", label: "Extended - 180 days per trip" },
                  ]}
                  label="Length of trip"
                />
                <div className="mt-3">
                  <CommonRadioButton
                    options={[
                      { value: "monthly", label: "Monthly" },
                      { value: "quarterly", label: "Quarterly" },
                    ]}
                    label="Cancellation cover"
                  />
                </div>
              </div>
            </Collapse>
          </CommonFieldWrapper>
        </div>

        <div>
          <CommonFieldWrapper
            label="Area of travel"
            modalContent={modalContent[0]}
          >
            <CommonRadioButton
              options={availableAreas}
              onChange={setSelectedArea}
              value={selectedArea}
            />
          </CommonFieldWrapper>
        </div>

        {/* Date Picker */}
        <div>
          <label
            htmlFor="start-date"
            className="block mb-2 text-sm font-semibold"
          >
            Start Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
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

        <Collapse isOpened={selectedInsuranceType === "single"}>
          <div>
            <label
              htmlFor="end-date"
              className="block mb-2 text-sm font-semibold"
            >
              End Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {endDate ? (
                    format(endDate, "PPP")
                  ) : (
                    <span>Pick an end date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  minDate={date}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </Collapse>

        {/* Other form fields */}
        <div>
          <CommonDropdownSelect
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
            placeholder="1"
            label="Number of adults"
            width="xl:w-[100px]"
            value={selectedAdults}
            onChange={handleAdultsChange}
          />
        </div>

        <div>
          <CommonDropdownSelect
            options={[
              { value: "0", label: "0" },
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
            placeholder="0"
            label="Number of children"
            width="xl:w-[100px]"
            value={selectedChildren}
            onChange={handleChildrenChange}
          />
        </div>

        <div>
          <CommonRadioButton
            options={[
              { value: "light", label: "Winter Sports?" },
              { value: "dark", label: "Adventure Sports?" },
            ]}
            onChange={(value) => console.log(value)}
            defaultValue="light"
          />
        </div>

        <div className="flex gap-2 xl:gap-3 mt-7">
          <p className="text-textBlackV2 text-sm xl:text-base xl:leading-[25px]">
            Click here to view activities covered in the &apos;standard&apos;
            policy
          </p>
          <div
            className="bg-[#8CA2B4] h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => openModal(modalContent[0])}
          >
            <QuestionIcon />
          </div>
        </div>

        <div className="flex gap-3 mt-7">
          <p className="text-textBlackV2 text-sm xl:text-base xl:leading-[25px]">
            Click here to view activities covered in the &apos;Adventure
            sports&apos; policy
          </p>
          <div
            className="bg-[#8CA2B4] h-6 w-6 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => openModal(modalContent[1])}
          >
            <QuestionIcon />
          </div>
        </div>
      </form>

      <CommonModal
        isOpen={isModalOpen}
        content={modalData}
        onClose={closeModal}
      />
    </div>
  );
};

export default TravelDetails;
