import CommonTitle from "@/components/common/CommonTitle";
import CommonWrapper from "@/components/common/CommonWrapper";
import FormInput from "@/components/common/FormInput";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              className="mt-2 h-[152px] w-full rounded-md border border-[#4B586B] p-3 focus:outline-none"
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-primaryBlue py-[15px] text-white"
            >
              Send
            </button>
          </div>
        </form>
      </CommonWrapper>
    </div>
  );
};

export default ContactForm;
