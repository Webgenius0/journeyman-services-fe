import TrustSection from "@/components/home/TrustSection";
import FaqArea from "../components/home/FaqArea";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import TestimonialArea from "../components/home/TestimonialArea";

const Home = () => {
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
