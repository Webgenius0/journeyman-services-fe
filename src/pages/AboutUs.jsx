import CommonWrapper from "@/components/common/CommonWrapper";
import OurStory from "@/components/aboutus/OurStory";
import Topsection from "@/components/aboutus/topsection";
import MissionVission from "@/components/aboutus/MissionVission";

const AboutUs = () => {
  return (
    <CommonWrapper>
      {/* top section */}
     <Topsection/>
      {/* our story section */}
    <div className="mt-[87px]">
    <OurStory/>
    </div>
    <div className="py-[100px]">
        <MissionVission/>
    </div>
    </CommonWrapper>
  );
};

export default AboutUs;
