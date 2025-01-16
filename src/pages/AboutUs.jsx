import CommonWrapper from "@/components/common/CommonWrapper";
import OurStory from "@/components/aboutus/OurStory";
import MissionVission from "@/components/aboutus/MissionVission";
import TestimonialArea from "@/components/home/TestimonialArea";
import FaqArea from "@/components/home/FaqArea";
import TrustSection from "@/components/home/TrustSection";
import CoreValues from "@/components/aboutus/CoreValues";
import Topsection from "@/components/aboutus/Topsection";
import useFetchData from "@/hooks/api/useFetchData";
import LoadingComponent from "@/components/loaders/LoadingComponent";

const AboutUs = () => {
  const { data, isLoading } = useFetchData("/home");

  const faq = data?.data?.cms?.faq || {};
  const faqList = data?.data?.cms?.faqs || [];
  const reviews = data?.data?.cms?.testimonial || [];
  const quote = data?.data?.cms?.home_qoute || "Default Quote";
  if (isLoading) return <LoadingComponent />;
  return (
    <div>
      <CommonWrapper>
        {/* top section */}
        <Topsection />
        {/* our story section */}
        <div className="mt-6 xl:mt-[87px]">
          <OurStory />
        </div>
        <div className="py-10 xl:py-[100px]">
          <MissionVission />
        </div>
        <CoreValues />
      </CommonWrapper>
      <TestimonialArea reviews={reviews} />
      <FaqArea faq={faq} faqList={faqList} />
      <TrustSection quote={quote} />
    </div>
  );
};

export default AboutUs;
