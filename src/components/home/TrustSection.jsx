import PlaneIcon from "@/assets/Icons/PlaneIcon";
import CommonButton from "../common/CommonButton";
import CommonWrapper from "../common/CommonWrapper";

const TrustSection = () => {
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
          <h3 className="text-xl xl:text-[28px] font-bold">
            Trusted by thousands of travelers worldwide
          </h3>
          <p className="text-sm xl:text-base xl:max-w-[796px] mt-4 text-textGray">
            &quot;Quick, Easy, and Reliable Travel Insurance — Protect Your
            Journey with Instant Coverage! Get personalized quotes in seconds,
            pay securely online, and receive your policy immediately. Travel
            worry-free with comprehensive protection tailored to your
            needs!&quot;
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
