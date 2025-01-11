import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CommonRadioButton = ({ name, options, defaultValue }) => {
  return (
    <RadioGroup defaultValue={defaultValue} name={name}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.id} />
          <Label htmlFor={option.id}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default CommonRadioButton;
