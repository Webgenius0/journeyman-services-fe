import TrustSection from "@/components/home/TrustSection";
import FaqArea from "../components/home/FaqArea";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import TestimonialArea from "../components/home/TestimonialArea";
import useFetchData from "@/hooks/api/useFetchData";
import LoadingComponent from "@/components/loaders/LoadingComponent";

const Home = () => {
  const { data, isLoading } = useFetchData("/home");
  
  if (isLoading) return <LoadingComponent />;
  
  const heroSectionData = data?.data?.cms?.home_banner || {};
  const bannerImages = data?.data?.cms?.home_banners || [];
  const marqueesData = data?.data?.cms?.home_marquee || [];
  const howitworksImage = data?.data?.cms?.how_it_work?.image || "";
  const howitworksData = data?.data?.cms?.how_it_works || [];
  const reviews = data?.data?.cms?.testimonial || [];
  const faq = data?.data?.cms?.faq || {};
  const faqList = data?.data?.cms?.faqs || [];
  const quote = data?.data?.cms?.home_qoute || "";

  return (
    <div>
      {heroSectionData && (
        <HeroSection
          heroSectionData={heroSectionData}
          bannerImages={bannerImages}
        />
      )}
      {marqueesData && <Services marqueesData={marqueesData} />}
      {howitworksData && (
        <HowItWorks
          howitworksImage={howitworksImage}
          howitworksData={howitworksData}
        />
      )}
      {reviews && <TestimonialArea reviews={reviews} />}
      {faqList && <FaqArea faq={faq} faqList={faqList} />}
      {quote && <TrustSection quote={quote} />}
    </div>
  );
};

export default Home;
