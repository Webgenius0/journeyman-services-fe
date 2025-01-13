import CommonWrapper from "../common/CommonWrapper";
import StepCard from "../common/StepCard";
import howitworksimg from "../../assets/how-it-works-img.png";
import CommonTitle from "../common/CommonTitle";

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
        <div className="mt-4 flex flex-col xl:flex-row items-center gap-[60px] xl:gap-[150px]">
          {/* img */}
          <div>
            <CommonTitle>How it works?</CommonTitle>
            <div className="w-full xlg:h-[600px] flex-1 overflow-hidden">
              <img
                src={howitworksimg}
                alt="person-example"
                className=" xl:h-full w-full object-cover"
              />
            </div>
          </div>
          {/* steps */}
          <div className="flex-1">
            {instructions.map((item, index) => (
              <StepCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                isLastItem={index === instructions.length - 1}
                widthClass="max-w-[308px]"
              />
            ))}
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default HowItWorks;
