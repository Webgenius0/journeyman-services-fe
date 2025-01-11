import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FormInput from "../common/FormInput";

const PasswordContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Password Change Data:", data);
    toast.success("Password updated successfully!");
  };

  const password = watch("newPassword");

  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-4">Change Password</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 xlg:grid-cols-3 gap-4">
          {/* New Password */}
          <FormInput
            label="New Password"
            type={showPassword ? "text" : "password"}
            name="newPassword"
            placeholder="Enter new password"
            register={register}
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
            error={errors.newPassword}
            icon={
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            }
            containerClass="flex-1"
          />

          {/* Confirm Password */}
          <FormInput
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            register={register}
            validation={{
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            error={errors.confirmPassword}
            icon={
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            }
            containerClass="flex-1"
          />
        </div>

        {/* Submit Button */}
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
  );
};

export default PasswordContainer;
