import CommonButton from "../common/CommonButton";
import CommonWrapper from "../common/CommonWrapper";
import usersimg from "../../assets/users.png";
import HeroIcon from "../../assets/Icons/HeroIcon";
const HeroSection = () => {
  return (
    <CommonWrapper>
      <div className="flex justify-between">
        {/* left side area with content */}
        <div className="max-w-[546px]">
          <h3 className="text-6xl text-textBlack font-bold leading-[85px] mb-4">
            Travel Insurance Instantly
          </h3>
          <p className="text-textBlackV2 max-w-[330px]">
            Protect your journey with comprehensive coverage. Fast, reliable,
            and affordable.
          </p>
          <div className="mt-[60px]">
            <CommonButton>Get a quote now</CommonButton>
          </div>
          {/* user img */}
          <div className="mt-[147px] flex gap-[60px]">
            <div className="min-w-[312px]">
              <div>
                <img src={usersimg} alt="users" />
              </div>
              <p className="text-textBlack mt-4 font-medium">
                300+ Booking Confirmed <br /> for this Week
              </p>
            </div>
            {/* icon */}
            <div>
              <HeroIcon />
            </div>
          </div>
        </div>

        {/* right side img */}
        <div></div>
      </div>
    </CommonWrapper>
  );
};

export default HeroSection;
