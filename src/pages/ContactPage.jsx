import CommonTitle from "@/components/common/CommonTitle";
import CommonWrapper from "@/components/common/CommonWrapper";
import ContactForm from "@/components/contactus/ContactForm";
import ContactUs from "@/components/contactus/ContactUs";
import LoadingComponent from "@/components/loaders/LoadingComponent";
import useFetchData from "@/hooks/api/useFetchData";

const ContactPage = () => {
  const { isLoading } = useFetchData("/settings");
  if (isLoading) return <LoadingComponent />;
  return (
    <CommonWrapper version="lg">
      <CommonTitle>We&apos;re Here to Help</CommonTitle>
      <p className="mt-4 text-sm lg:text-base xl:text-xl text-textGray text-center xlg:text-left">
        Have questions or need assistance? <br /> Reach out to us anytime.
      </p>
      <div className="flex flex-col justify-between xl:flex-row">
        <ContactUs />
        <ContactForm />
      </div>
    </CommonWrapper>
  );
};

export default ContactPage;
