import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CommonRadioButton = ({ name, options, defaultValue }) => {
  return (
    <RadioGroup defaultValue={defaultValue} name={name}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <label className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.id} />
            <span>{option.label}</span>
          </label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default CommonRadioButton;
