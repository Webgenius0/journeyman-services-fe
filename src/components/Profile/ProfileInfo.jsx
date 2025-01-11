import { useRef, useState } from "react";
import EditProfileIcon from "@/assets/Icons/EditProfileIcon";
import profilepic from "../../assets/dp.png";
import FormInput from "../common/FormInput";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import CommonWrapper from "../common/CommonWrapper";
// import EyeIcon from "@/assets/Icons/EyeIcon";
import toast from "react-hot-toast";
const ProfileInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Profile updated succesfully!");
  };

  const gender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("newPassword");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <div className="">
      <div className="flex flex-col">
        {/* Profile picture */}
        <img
          src={profilepic}
          alt="Profile"
          className="h-20 w-20 cursor-pointer rounded-full object-cover xl:h-32 xl:w-32"
          onClick={handleFileInputClick}
        />

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          className="opacity-0"
          onChange={(e) => console.log(e.target.files[0])}
        />

        {/* Edit icon */}
        <div className="flex items-center gap-8">
          <div>
            <h2 className="text-xl font-bold lg:text-2xl xl:text-[32px]">
              Adam Smith
            </h2>
            <p className="text-sm text-textGray xl:text-base">
              Member Since June 2024
            </p>
          </div>
          <div className="cursor-pointer" onClick={handleFileInputClick}>
            <EditProfileIcon />
          </div>
        </div>
      </div>

      {/* Change details form */}
      <div className="mt-6 xlg:mt-10 xl:mt-[60px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 gap-y-2 xlg:grid-cols-2 xlg:gap-8 xlg:gap-y-[32px] xl:grid-cols-3 xl:gap-x-[60px]">
            {/* Name */}
            <div>
              <FormInput
                label="Full Name"
                type="text"
                placeholder="Enter name"
                register={register}
                name="name"
                error={errors.name}
                validation={{
                  required: "Name is required",
                }}
                bgColor="bg-transparent"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="mb-3 block font-bold">
                Gender
              </label>
              <CommonDropdownSelect
                value="gender"
                options={gender}
                placeholder="Select Gender"
                className="w-full"
                {...register("gender", { required: "Gender is required" })}
              />
              {errors.gender && (
                <span className="text-sm text-red-500">
                  {errors.gender.message}
                </span>
              )}
            </div>

            {/* Age */}
            <div>
              <FormInput
                label="Age"
                type="number"
                placeholder="Enter Age"
                register={register}
                name="age"
                error={errors.age}
                validation={{
                  required: "Age is required",
                }}
                bgColor="bg-transparent"
              />
            </div>

            {/* Phone number */}
            <div>
              <FormInput
                label="Phone Number"
                type="number"
                placeholder="Enter phone number"
                register={register}
                name="phone"
                error={errors.phone}
                validation={{
                  required: "Phone number is required",
                }}
                bgColor="bg-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <FormInput
                label="Email"
                type="email"
                placeholder="Enter email"
                register={register}
                name="email"
                error={errors.email}
                validation={{
                  required: "Email is required",
                }}
                bgColor="bg-transparent"
              />
            </div>
          </div>

          {/* Submit button for basic info */}
          <div className="flex justify-center xlg:mt-10 xl:mt-[60px]">
            <button
              type="submit"
              className="rounded-[32px] bg-[#101111] px-5 py-4 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <CommonWrapper noContainer>
        {/* Change password section */}
        <div className="grid gap-2 xlg:grid-cols-2 xlg:gap-8 xl:grid-cols-3 xl:gap-[60px]">
          {/* New Password */}
          <div>
            <FormInput
              label="New Password"
              type={showPassword ? "text" : "password"}
              name="newPassword"
              placeholder="Enter new password"
              register={register}
              required="Password is required"
              error={errors.newPassword}
              validation={{
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password cannot exceed 20 characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message:
                    "Password must include uppercase, lowercase, number, and special character",
                },
              }}
              icon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
                >
                  {showPassword ? <FaEyeSlash size={24} /> : "<EyeIcon />"}
                </button>
              }
              containerClass="relative"
              bgColor="bg-transparent"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <FormInput
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              register={register}
              required="Please confirm your password"
              error={errors.confirmPassword}
              validation={{
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
              icon={
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash size={24} /> : ""}
                </button>
              }
              containerClass="relative"
              bgColor="bg-transparent"
            />
          </div>
        </div>

        {/* Submit button for password change */}
        <div className="mt-10 flex justify-center xlg:mt-[60px]">
          <button
            type="submit"
            className="rounded-[32px] bg-[#101111] px-5 py-4 text-white"
          >
            Save Changes
          </button>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default ProfileInfo;
