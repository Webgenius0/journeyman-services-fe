import CommonFieldWrapper from "@/components/common/CommonFieldWrapper";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import CommonRadioButton from "../common/CommonRadioButton";

const TravelDetails = () => {
  return (
    <div className="w-[565px]">
      <h3>Travel Details</h3>
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
      {/*  */}
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
      <CommonFieldWrapper label="Area of travel">
        <CommonRadioButton
          options={[
            { value: "light", label: "Worldwide" },
            { value: "dark", label: "Worldwide (excluding USA, Canada & Caribbean)" },
          ]}
          onChange={(value) => console.log(value)}
          defaultValue="light"
        />
      </CommonFieldWrapper>
    </div>
  );
};

export default TravelDetails;
