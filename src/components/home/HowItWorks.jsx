import CommonWrapper from "../common/CommonWrapper";
import StepCard from "../common/StepCard";
import howitworksimg from "../../assets/how-it-works-img.png";
import VideoPlayerIcon from "../../assets/Icons/VideoPlayerIcon";

const HowItWorks = () => {
  const instructions = [
    {
      title: "Enter Your Travel Details",
      subtitle:
        "Provide your resident country, number of travelers, DOBs, destination, and travel dates.",
    },
    {
      title: "Get an Instant Quote",
      subtitle:
        "View tailored travel insurance plans in GBP/USD, ready for your selection.",
    },
    {
      title: "Pay Securely Online",
      subtitle: "Complete your purchase via a trusted payment gateway.",
    },
    {
      title: "Receive Your Policy",
      subtitle:
        "Instantly get your policy certificate via email and travel worry-free!",
    },
  ];

  return (
    <section>
      <CommonWrapper>
        <div className="mx-auto ">
          <div className="mt-14 flex flex-row gap-[150px]">
            {/* img */}
            <div className="xlg:h-[600px] flex-1 overflow-hidden rounded-[24px]">
              <img
                src={howitworksimg}
                alt="person-example"
                className=" xl:h-full w-full object-cover"
              />
            </div>
            {/* steps */}
            <div className="flex-1">
              {instructions.map((item, index) => (
                <StepCard
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  isLastItem={index === instructions.length - 1}
                  widthClass=""
                />
              ))}
            </div>

          <div className="flex gap-6 items-center">
              {/* video player */}
              <div className="relative bg-primaryBlue flex items-center justify-center h-[100px] w-[100px] rounded-full">
              <VideoPlayerIcon className="absolute" />
            </div>
            {/* text */}
            <div>
              <h3 className="mt-2 text-textBlack font-bold">Watch Video</h3>
            </div>
          </div>
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default HowItWorks;
