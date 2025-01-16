import CommonWrapper from "../common/CommonWrapper";
import StepCard from "../common/StepCard";
import CommonTitle from "../common/CommonTitle";
import useFetchData from "@/hooks/api/useFetchData";

const HowItWorks = () => {
  const { data } = useFetchData("/home");
  const howitworksImage = data?.data?.cms?.how_it_work?.image;
  const howitworksData = data?.data?.cms?.how_it_works;
  console.log(howitworksData);

  console.log(howitworksData);

  return (
    <section>
      <CommonWrapper>
        <div className="mt-4 flex flex-col xlg:flex-row items-center gap-[60px] 2xl:gap-[150px]">
          {/* img */}
          <div>
            <CommonTitle>How it works?</CommonTitle>
            <div className="w-[550px] lg:h-[400px] xl:h-[600px] flex-1 overflow-hidden mt-4 xl:mt-0">
              <img
                src={howitworksImage}
                alt="person-example"
                className=" xl:h-full w-full object-cover"
              />
            </div>
          </div>
          {/* steps */}
          <div className="flex-1">
            {howitworksData?.map((item, index) => (
              <StepCard
                key={index}
                title={item.title}
                subtitle={item.description}
                isLastItem={index === howitworksData.length - 1}
                widthClass="xl:max-w-[308px]"
              />
            ))}
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default HowItWorks;
