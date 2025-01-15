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
  const heroSectionData = data?.data?.cms?.home_banner;
  const bannerImages = data?.data?.cms?.home_banners || [];
  const marqueesData = data?.data?.cms?.home_marquee;
  const howitworksImage = data?.data?.cms?.how_it_work.image;
  const howitworksData = data?.data?.cms?.how_it_works;
  const reviews = data?.data?.cms?.testimonial;
  const faq = data?.data?.cms?.faq;
  const faqList = data?.data?.cms?.faqs;
  const quote = data?.data?.cms?.home_qoute;


  if (isLoading) return <LoadingComponent />;
  return (
    <div>
      <HeroSection
        heroSectionData={heroSectionData}
        bannerImages={bannerImages}
      />
      <Services marqueesData={marqueesData} />
      <HowItWorks howitworksImage={howitworksImage} howitworksData={howitworksData} />
      <TestimonialArea reviews={reviews} />
      <FaqArea faq={faq} faqList={faqList} />
      <TrustSection quote={quote} />
    </div>
  );
};

export default Home;
