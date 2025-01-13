import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  export default function CommonDropdownSelect({
    options,
    label,
    placeholder,
    onChange,
    defaultValue, 
  }) {
    return (
      <div>
        <p className="mb-3">{label}</p>
        <Select
          onValueChange={onChange}
          defaultValue={defaultValue} 
        >
          <SelectTrigger className="w-full py-[23px] px-6 rounded-lg border-[#BABABA] focus:ring-0 text-[#6B6B6B]">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }