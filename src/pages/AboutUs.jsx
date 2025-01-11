import CommonWrapper from "@/components/common/CommonWrapper";
import OurStory from "@/components/aboutus/OurStory";
import Topsection from "@/components/aboutus/topsection";

const AboutUs = () => {
  return (
    <CommonWrapper>
      {/* top section */}
     <Topsection/>
      {/* our story section */}
    <div className="mt-[87px]">
    <OurStory/>
    </div>
    </CommonWrapper>
  );
};

export default AboutUs;
