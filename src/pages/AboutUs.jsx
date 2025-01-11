import CommonWrapper from "@/components/common/CommonWrapper";
import OurStory from "@/components/aboutus/OurStory";
import Topsection from "@/components/aboutus/topsection";
import MissionVission from "@/components/aboutus/MissionVission";
import TestimonialArea from "@/components/home/TestimonialArea";
import FaqArea from "@/components/home/FaqArea";
import TrustSection from "@/components/home/TrustSection";
import CoreValues from "@/components/aboutus/CoreValues";

const AboutUs = () => {
  return (
    <div>
      <CommonWrapper>
        {/* top section */}
        <Topsection />
        {/* our story section */}
        <div className="mt-[87px]">
          <OurStory />
        </div>
        <div className="py-[100px]">
          <MissionVission />
        </div>
        <CoreValues/>
      </CommonWrapper>
      <TestimonialArea />
      <FaqArea />
      <TrustSection />
    </div>
  );
};

export default AboutUs;
