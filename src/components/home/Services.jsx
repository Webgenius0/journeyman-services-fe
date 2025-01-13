import Marquee from "react-fast-marquee";
import CommonWrapper from "../common/CommonWrapper";
import FlowerIcon from "../../assets/Icons/FlowerIcon";
const ReviewComponent = ({ info }) => {
  return (
    <div className="flex items-center gap-6 py-5">
      <div>
        <FlowerIcon />
      </div>
      <div>
        <h3 className="text-sm xl:text-[20px] leading-6 text-white">{info.title}</h3>
      </div>
    </div>
  );
};

const Services = () => {
  const reviews = [
    {
      title: "Affordable Plans for Individuals, Couples, and Families",
    },
    {
      title: "Instant Policy Confirmation",
    },
    {
      title: "Peace of Mind While Traveling",
    },
    {
      title: "Instant Policy Confirmation",
    },
    {
      title: "Affordable Plans for Individuals, Couples, and Families",
    },
    {
      title: "Peace of Mind While Traveling",
    },
    {
      title: "Instant Policy Confirmation",
    },
  ];

  return (
    <CommonWrapper noContainer>
      <div className="bg-primaryBlue bg-cover bg-center">
          <Marquee>
            <div className="mx-6 flex items-center gap-6">
              {reviews.map((item, index) => (
                <ReviewComponent key={index} info={item} />
              ))}
            </div>
          </Marquee>
      </div>
    </CommonWrapper>
  );
};

export default Services;
