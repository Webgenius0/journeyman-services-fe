import EmailIcon from "@/assets/Icons/EmailIcon";
import LocationIcon from "@/assets/Icons/LocationIcon";
import PhoneIcon from "@/assets/Icons/PhoneIcon";
import CommonWrapper from "@/components/common/CommonWrapper";
import useFetchData from "@/hooks/api/useFetchData";

const ContactUs = () => {
  const { data } = useFetchData("/settings");
  console.log(data);
  const contactInfomation = data?.data?.settings;
  console.log(contactInfomation);

  return (
    <div className="xl:max-w-[294px] xlg:flex-1">
      <CommonWrapper noContainer>
        <h2 className="text-xl xlg:text-[32px] font-bold text-black text-center xlg:text-left">
          Contact Us
        </h2>

        <div className="mt-8 sm:block xlg:space-y-8  xl:block justify-between items-center">
          {/* email */}
          <div className="flex items-center gap-8 mb-4 xlg:mb-0">
            <div className="rounded-3xl bg-[#EDEFFF] p-3">
              <EmailIcon />
            </div>
            <div>
              <h2 className="mb-2 text-base lg:text-lg xlg:text-2xl font-semibold xlg:font-bold">
                Email:
              </h2>
              <p className="text-sm xlg:text-base">{contactInfomation.email}</p>
            </div>
          </div>
          {/* phone */}
          <div className="flex items-center gap-8 mb-4 xlg:mb-0">
            <div className="rounded-3xl bg-[#EDEFFF] p-3">
              <PhoneIcon />
            </div>
            <div>
              <h2 className="mb-2 text-base lg:text-lg xlg:text-2xl font-semibold xlg:font-bold">
                Phone:
              </h2>
              <p className="text-sm xlg:text-base">{contactInfomation.phone}</p>
            </div>
          </div>
          {/* location */}
          <div className="flex items-center gap-8">
            <div className="rounded-3xl bg-[#EDEFFF] p-3">
              <LocationIcon />
            </div>
            <div>
              <h2 className="mb-2 text-base lg:text-lg xlg:text-2xl font-semibold xlg:font-bold">
                Address:
              </h2>
              <p className="text-sm xlg:text-base">
                {contactInfomation.address}
              </p>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default ContactUs;
