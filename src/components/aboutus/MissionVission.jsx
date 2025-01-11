const MissionVission = () => {
  return (
    <div className="flex gap-[130px]">
      {/* mission */}
      <div>
        <h3 className="text-[36px] text-textGray leading-[44px] mb-[15px] font-bold">
          Our Mission
        </h3>
        <p className="text-lg leading-[30px] text-textGrayV3">
          Our mission is to empower travelers with peace of mind through
          innovative, user-friendly, and comprehensive insurance solutions that
          prioritize safety and convenience.
        </p>
      </div>
      {/* vission */}
      <div>
        <h3 className="text-[36px] text-textGray leading-[44px] mb-[15px] font-bold">
          Our Vision
        </h3>
        <p className="text-lg leading-[30px] text-textGrayV3">
          To be the leading global travel insurance platform, empowering every
          traveler with seamless access to reliable, affordable, and innovative
          protection, ensuring peace of mind for journeys across the world.
        </p>
      </div>
    </div>
  );
};

export default MissionVission;
