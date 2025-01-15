import CommonButton from "../common/CommonButton";
import CommonWrapper from "../common/CommonWrapper";
import usersimg from "../../assets/users.png";
import HeroIcon from "../../assets/Icons/HeroIcon";
import PlaneIcon from "@/assets/Icons/PlaneIcon";
import heroimg1 from "../../assets/hero-img-1.png";
import heroimg2 from "../../assets/hero-img-2.png";
import heroimg3 from "../../assets/hero-img-3.png";
import EarthIcon from "@/assets/Icons/EarthIcon";
import useFetchData from "@/hooks/api/useFetchData";

const HeroSection = () => {
  const { data } = useFetchData("/home");
  console.log(data);

  return (
    <CommonWrapper>
      <div className="flex flex-col xlg:flex-row xlg:items-center 2xl:items-start gap-[60px] 2xl:gap-[202px]">
        {/* left side area with content */}
        <div className="w-full xlg:max-w-[546px]">
          <div className="flex justify-center xl:justify-start gap-4 items-center">
            <h3 className="font-medium text-textBlack">Fast</h3>
            <span className="w-2 h-2 bg-[#1A1511] rounded-full"></span>
            <h3 className="font-medium text-textBlack">Reliable</h3>
            <span className="w-2 h-2 bg-[#1A1511] rounded-full"></span>
            <h3 className="font-medium text-textBlack">Affordable</h3>
          </div>
          <h3 className="mt-4 xl:mt-0 text-2xl xl:text-6xl text-center xl:text-left text-textBlack font-bold xl:leading-[85px] mb-4">
            Travel Insurance Instantly
          </h3>
          <p className="text-textBlackV2 text-center xl:text-left xl:max-w-[330px]">
            Protect your journey with comprehensive coverage. Fast, reliable,
            and affordable.
          </p>
          <div className="mt-4 xl:mt-[60px] flex justify-center xl:block">
            <CommonButton
              linkUrl="/information-input"
              className="py-3 px-7"
              icon={<PlaneIcon />}
            >
              Get a quote now
            </CommonButton>
          </div>
          {/* user img */}
          <div className="mt-6 xl:mt-[147px] flex flex-col jus xl:flex-row items-center gap-6 xl:gap-[60px]">
            <div className="xl:min-w-[312px] flex flex-col items-center xlg:block">
              <div>
                <img src={usersimg} alt="users" />
              </div>
              <p className="text-textBlack mt-4 font-medium">
                300+ Booking Confirmed <br className="hidden xl:block" /> for
                this Week
              </p>
            </div>
            {/* icon */}
            <div>
              <HeroIcon />
            </div>
          </div>
        </div>

        {/* right side img */}
        <div className="flex xlg:items-center gap-6">
          {/* left imgs */}
          <div>
            {/* first and second */}
            <div>
              <img src={heroimg1} alt="" className="rounded-2xl" />
            </div>
            <div className="mt-6">
              <img src={heroimg2} alt="" className="rounded-2xl" />
            </div>
          </div>
          {/* right img */}
          <div>
            <div className="bg-[#E6EBEF] flex justify-center gap-2 items-center px-7 py-3 rounded-3xl mb-6">
              <EarthIcon />
              <p className="text-[12px] text-[#4B586B]">Alabama - Miami</p>
            </div>
            <div>
              <img src={heroimg3} alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default HeroSection;
