import { useRef, useState } from "react";
import EditProfileIcon from "@/assets/Icons/EditProfileIcon";
import profilepic from "../../assets/dp.png";
import FormInput from "../common/FormInput";
import { useForm, Controller } from "react-hook-form";
import CommonDropdownSelect from "@/components/common/CommonDropdownSelect";
import toast from "react-hot-toast";
import PasswordContainer from "./PasswordContainer";

const ProfileInfo = () => {
  const [uploadedImage, setUploadedImage] = useState(profilepic);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Profile updated successfully!");
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUploadedImage(objectUrl);
    }
  };

  return (
    <div className="p-6 xl:p-10">
      <div className="flex flex-col items-center xl:items-start">
        {/* Profile Picture */}
        <img
          src={uploadedImage}
          alt="Profile"
          className="h-20 w-20 cursor-pointer rounded-full object-cover xl:h-32 xl:w-32"
          onClick={handleFileInputClick}
        />

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        {/* Edit Icon */}
        <div className="flex items-center gap-8 mt-4">
          <div>
            <h2 className="text-xl font-bold lg:text-2xl xl:text-[32px]">
              Adam Smith
            </h2>
            <p className="text-sm text-gray-500 xl:text-base">
              Member Since June 2024
            </p>
          </div>
          <div className="cursor-pointer" onClick={handleFileInputClick}>
            <EditProfileIcon />
          </div>
        </div>
      </div>

      {/* Change Details Form */}
      <div className="mt-8 xl:mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 xl:gap-8 xl:grid-cols-3">
            {/* Full Name */}
            <FormInput
              label="Full Name"
              type="text"
              placeholder="Enter your name"
              register={register}
              name="name"
              error={errors.name}
              validation={{
                required: "Name is required",
              }}
            />

            {/* Gender */}
            <div>
              <CommonDropdownSelect
                control={control}
                name="gender"
                options={genderOptions}
                placeholder="Select Gender"
                label="Gender"
              />
              {errors.gender && (
                <p className="text-sm text-red-500">{errors.gender.message}</p>
              )}
            </div>

            {/* Age */}
            <FormInput
              label="Age"
              type="number"
              placeholder="Enter your age"
              register={register}
              name="age"
              error={errors.age}
              validation={{
                required: "Age is required",
                min: { value: 1, message: "Age must be at least 1" },
              }}
            />

            {/* Phone Number */}
            <FormInput
              label="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              register={register}
              name="phone"
              error={errors.phone}
              validation={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number format",
                },
              }}
            />

            {/* Email */}
            <FormInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register}
              name="email"
              error={errors.email}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              }}
            />
          </div>

          {/* Save Changes Button */}
          <div className="flex justify-center mt-8 xl:mt-12">
            <button
              type="submit"
              className="rounded-3xl bg-black px-6 py-3 text-white hover:bg-gray-800"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Password Change Section */}
      <PasswordContainer />
    </div>
  );
};

export default ProfileInfo;
