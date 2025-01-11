const FormInput = ({
  label,
  type,
  name,
  placeholder,
  register,
  error,
  icon,
  validation,
  containerClass,
  bgColor = "bg-white",
  required,
}) => {
  return (
    <div className={`${containerClass}`}>
      <div className="mb-3 flex items-center justify-between">
        <label
          htmlFor={name}
          className="text-sm text-primaryBlue xlg:text-base"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      <div className="relative">
        <input
          {...register(name, validation)}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`w-full rounded-md border border-[#B8B6B5] px-4 py-2 text-sm text-textGrayV2 focus:outline-none xlg:px-6 xlg:py-[11px] xlg:text-base ${bgColor}`}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm font-semibold text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
