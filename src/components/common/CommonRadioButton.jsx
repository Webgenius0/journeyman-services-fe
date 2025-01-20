import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CommonRadioButton = ({ name, options, defaultValue, onChange, label }) => {
  return (
    <div>
      {label && <label className="text-sm xl:text-base mb-2">{label}</label>} 
      <RadioGroup defaultValue={defaultValue} name={name} onValueChange={(value) => onChange && onChange(value)}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <label className="flex items-center space-x-2 text-sm xl:text-base">
              <RadioGroupItem value={option.value} id={option.id} />
              <span>{option.label}</span>
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CommonRadioButton;
