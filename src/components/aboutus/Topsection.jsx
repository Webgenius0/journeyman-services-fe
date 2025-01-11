import aboutusimg1 from "@/assets/about-us-img-1.png";
const Topsection = () => {
    return (
        <div className="flex gap-8">
        {/* img */}
        <div className="w-[652px]">
          <img src={aboutusimg1} alt="" className="rounded-[14px]" />
        </div>
        {/* content */}
        <div className="w-[622px] space-y-[15px]">
          <h3 className="text-textGray font-bold leading-[38px] text-[32px]">
            We are deeply committed to delivering seamless, affordable, and
            reliable travel insurance solutions.
          </h3>
          <p className="text-textGrayV3 leading-[25px]">
            Our goal is to make travel insurance not just a necessity but a
            simple and reassuring part of your journey. Whether you're exploring
            a bustling city, relaxing on a tropical beach, or trekking through
            remote mountains, we’ve designed our coverage to adapt to your
            unique travel needs.
          </p>
          <p className="text-textGrayV3 leading-[25px]">
            Affordability is at the core of our service, ensuring that
            comprehensive protection is accessible to everyone—from solo
            travelers and families to groups and frequent flyers. Our reliable
            plans are backed by trusted underwriters, providing you with the
            assurance that you’re covered against unexpected events like medical
            emergencies, trip cancellations, or lost belongings.
          </p>
          <p className="text-textGrayV3 leading-[25px]">
            With a user-friendly platform that offers instant quotes and secure
            policy issuance, we strive to remove the hassle and complexity often
            associated with travel insurance. Wherever your journey takes you,
            we are here to protect what matters most—your safety and your peace
            of mind.&quot;
          </p>
        </div>
      </div>
    );
};

export default Topsection;