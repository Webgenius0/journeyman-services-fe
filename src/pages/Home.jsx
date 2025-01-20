import TrustSection from "@/components/home/TrustSection";
import FaqArea from "../components/home/FaqArea";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import TestimonialArea from "../components/home/TestimonialArea";
import useFetchData from "@/hooks/api/useFetchData";
import LoadingComponent from "@/components/loaders/LoadingComponent";

const Home = () => {
  const {isLoading} = useFetchData('/page/home')
  if (isLoading) return <LoadingComponent/>
  return (
    <div>
      <HeroSection />
      <Services />
      <HowItWorks />
      <TestimonialArea />
      <FaqArea />
      <TrustSection />
    </div>
  );
};

export default Home;
