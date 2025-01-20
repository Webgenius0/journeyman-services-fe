import PlaneIcon from "@/assets/Icons/PlaneIcon";
import CommonButton from "../common/CommonButton";
import CommonWrapper from "../common/CommonWrapper";
import useFetchData from "@/hooks/api/useFetchData";

const TrustSection = () => {
  const { data } = useFetchData("/page/home");
  const quote = data?.data?.cms?.home_qoute || "";
  return (
    <CommonWrapper version="lg">
      <div className="relative h-[400px] xl:h-[388px]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-[#B2C0CD] rounded-tl-[150px]"
          style={{ opacity: 0.2 }}
        ></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
          <h3 className="text-xl xl:text-[28px] font-bold">{quote?.title}</h3>
          <p className="text-sm xl:text-base xl:max-w-[796px] mt-4 text-textGray">
            {quote?.description}
          </p>
          <div className="mt-6 xl:mt-[60px]">
            <CommonButton
              linkUrl="/information-input"
              className="py-3 px-7"
              icon={<PlaneIcon />}
            >
              Get a quote now
            </CommonButton>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default TrustSection;
