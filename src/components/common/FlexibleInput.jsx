const FlexibleInput = ({
  label,
  type = "text",
  name,
  placeholder,
  register,
  error,
  validation,
  containerClass,
  width = "w-full",
  bgColor = "bg-white",
  required,
  underText,
  textarea,
  onChange,
}) => {
  return (
    <div className={`${containerClass}`}>
      {/* Label */}
      <div className="mb-3 flex items-center justify-between ">
        <label
          htmlFor={name}
          className="text-sm text-textBlack leading-[25px] xlg:text-base"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>

      {/* Input or Textarea Field */}
      <div className={`relative ${width}`}>
        {textarea ? (
          <textarea
            {...register(name, validation)}
            name={name}
            placeholder={placeholder}
            className={`w-full rounded-[5px] border border-[#8CA2B4] px-4 py-2 text-sm text-textGrayV2 focus:outline-none xlg:px-[6px] xlg:py-[6px] xlg:text-base ${bgColor} h-32`} // Added height for textarea
          />
        ) : (
          <input
            {...register(name, validation)}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full rounded-[5px] border border-[#8CA2B4] px-4 py-2 text-sm text-textGrayV2 focus:outline-none xlg:px-[6px] xlg:py-[6px] xlg:text-base ${bgColor}`}
          />
        )}
      </div>

      {/* Under Text */}
      {underText && <p className="mt-1 text-xs text-textBlack">{underText}</p>}

      {/* Error Text */}
      {error && (
        <p className="mt-2 text-sm font-semibold text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FlexibleInput;
