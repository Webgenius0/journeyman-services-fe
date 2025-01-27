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
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import useLogicPrices from "@/hooks/useLogicPrices";

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
    setPriceData,
    setLoading,
    age, 
    setAge, 
  } = useTravelDetails();
  const axiosPublic = useAxiosPublic();

  // console.log(selectedCountry, date, endDate);

  
  // by default currency is selected as GBP
  useEffect(() => {
    if (!selectedCurrency) {
      setSelectedCurrency("British Pounds");
    }
  }, [selectedCurrency, setSelectedCurrency]);


  const [partyType, setPartyType] = useState("individual");

  useEffect(() => {
    const totalPeople = parseInt(selectedAdults) + parseInt(selectedChildren);
  

    if (totalPeople === 1) {
      setPartyType("individual");
    } else if (totalPeople === 2) {
      setPartyType("couple");
    } else if (totalPeople >= 3) {
      setPartyType("family");
    }
  }, [selectedAdults, selectedChildren]);
  const calculateDuration = () => {
    if (date && endDate) {
      const startDate = new Date(date);
      const endDateObj = new Date(endDate);

      // Calculate duration in milliseconds and convert to days
      const durationInMillis = endDateObj - startDate;
      return Math.floor(durationInMillis / (1000 * 60 * 60 * 24));
    }
    return 0;
  };
  // console.log("duration", calculateDuration());


  const handleAgeChange = (value) => {
    setAge(value); 
  };
  const fetchPriceList = async () => {
    try {
      setLoading(true);
      const duration = calculateDuration();
      // console.log(ageGroup);

      const response = await axiosPublic.post("/price/list", {
        is_annual: selectedInsuranceType === "annual" ? 1 : 0,
        destination: selectedArea,
        max_duration: duration,
        age_group: age,
        party_type: partyType,
      });

      // Set the response data into state
      setPriceData(response.data);
    } catch (error) {
      console.error("Error fetching price list:", error);
    }
  };

  useEffect(() => {
    fetchPriceList();
  }, [selectedInsuranceType, selectedArea, date, endDate, age, partyType]);

  // console.log(
  //   selectedAdults,
  //   selectedArea,
  //   selectedInsuranceType,
  //   date,
  //   endDate,
  //   selectedCountry
  // );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { data } = useFetchData("/country/list");
  const countries = data?.data;
  // console.log(selectedCountry);

  const [availableAreas, setAvailableAreas] = useState([
    { value: "worldwide", label: "Worldwide" },
    {
      value: "ex_usa",
      label: "Worldwide (excluding USA, Canada & Caribbean)",
    },
    { value: "europe", label: "Europe Only" },
  ]);

 useEffect(()=>{
  const formattedStartDate = format(date, "yyyy-MM-dd");
  setDate(formattedStartDate);
 },[setDate,date])

  // end date by default +7 of todays date
  useEffect(() => {
    const today = new Date();
    const defaultEndDate = new Date(today);
    defaultEndDate.setDate(today.getDate() + 7);
    const formattedEndDate = format(defaultEndDate, "yyyy-MM-dd");
    setEndDate(formattedEndDate);
  }, [setEndDate]);

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
    if (value !== "single-trip") {
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
              { value: "USD", label: "USA Dollars" },
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
                { value: "single-trip", label: "Single trip" },
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
                      value: "standard",
                      label:
                        "Standard - 90 days per trip (45 days for over 74s)",
                    },
                    {
                      value: "extended",
                      label: "Extended - 180 days per trip",
                    },
                  ]}
                  label="Length of trip"
                />
                <div className="mt-3">
                  <CommonRadioButton
                    options={[
                      {
                        value: "standard",
                        label: "Standard Cover - £6,500 per person",
                      },
                      {
                        value: "increased",
                        label: "QuartIncreased Cover - £10,000 per personerly",
                      },
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
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <Collapse isOpened={selectedInsuranceType === "single-trip"}>
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
                  minDate={new Date()}
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
          <CommonDropdownSelect
            options={[
              { value: "49", label: "Less than 50" },
              { value: "50-59", label: "50-59" },
              { value: "60-64", label: "60-64" },
              { value: "65-69", label: "65-69" },
              { value: "70-74", label: "70-74" },
              { value: "75-79", label: "75-79" },
              { value: "80-84", label: "80-84" },
              { value: "85", label: "Over 84" },
            ]}
            placeholder="Less than 50"
            label="What age is the oldest insured party?
"
            width="xl:w-[200px]"
         
            value={age}
            onChange={handleAgeChange}  
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
