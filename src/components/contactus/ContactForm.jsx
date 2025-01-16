import CommonTitle from "@/components/common/CommonTitle";
import CommonWrapper from "@/components/common/CommonWrapper";
import FormInput from "@/components/common/FormInput";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await axiosPublic.post("/contact/send", data);
      toast.success(response.data.message);
      console.log(response);
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="flex-1 xl:max-w-[648px]">
      <CommonWrapper noContainer>
        <CommonTitle>Send Message</CommonTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <FormInput
            label="Full Name"
            type="text"
            placeholder="Adam Smith"
            register={register}
            name="name"
            error={errors.name}
            validation={{
              required: "Name is required",
            }}
            required
          />
          <FormInput
            label="Email"
            type="email"
            placeholder="adam_smith@Email.com"
            register={register}
            name="email"
            error={errors.email}
            validation={{
              required: "Email is required",
            }}
            required
          />
          <FormInput
            label="Phone Number"
            type="number"
            placeholder="+898-2786223"
            register={register}
            name="phone"
            error={errors.phone}
            validation={{
              required: "Phone number is required",
            }}
            required
          />
          {/* Textarea for Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              className="mt-2 h-[152px] w-full rounded-md border border-[#B8B6B5] p-3 focus:outline-none"
              {...register("message", {
                required: "Message is required",
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-primaryBlue py-[15px] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </CommonWrapper>
    </div>
  );
};

export default ContactForm;
