
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CommonDropdownSelect({
  value,
  onChange,
  options,
  placeholder,
  label,
}) {
  return (
    <div>
      <p className="mb-3">{label}</p>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-full text-sm xl:text-base xl:py-[23px] px-6 rounded-lg border-[#BABABA] focus:ring-0 text-[#6B6B6B]">
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
