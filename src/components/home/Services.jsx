import Marquee from "react-fast-marquee";
import CommonWrapper from "../common/CommonWrapper";
import FlowerIcon from "../../assets/Icons/FlowerIcon";
import useFetchData from "@/hooks/api/useFetchData";
const ReviewComponent = ({ info }) => {
  return (
    <div className="flex items-center gap-6 py-5">
      <div>
        <FlowerIcon />
      </div>
      <div>
        <h3 className="text-sm md:text-base xlg:text-[20px] leading-6 text-white">
          {info.title}
        </h3>
      </div>
    </div>
  );
};

const Services = () => {
  const { data } = useFetchData("/page/home");
  const marqueesData = data?.data?.cms?.home_marquee;
  return (
    <CommonWrapper noContainer>
      <div className="bg-primaryBlue bg-cover bg-center">
        <Marquee>
          <div className="mx-6 flex items-center gap-6">
            {marqueesData?.map((item, index) => (
              <ReviewComponent key={index} info={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </CommonWrapper>
  );
};

export default Services;
