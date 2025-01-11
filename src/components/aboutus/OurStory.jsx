import aboutusimg2 from "@/assets/about-us-img-2.png";
const OurStory = () => {
    return (
        <div
        className="flex items-center gap-8 bg-[#F5F7F9] rounded-3xl
 pt-[56px] pr-[42px] pb-[39px] pl-[47px]"
      >
        {/* content */}
        <div className="w-[622px] space-y-[15px] ">
          <h3 className="text-textGray font-bold leading-[38px] text-[32px]">
            Our Story
          </h3>
          <p className="text-textGrayV3 leading-[25px]">
            Founded with the vision to revolutionize the travel insurance
            industry, we recognized a significant gap in the market for
            accessible, reliable, and user-friendly insurance solutions.
            Travelers often faced challenges like complex processes, unclear
            coverage options, and lengthy waiting times to secure policies.
          </p>
          <p className="text-textGrayV3 leading-[25px]">
            Affordability is at the core of our service, ensuring that
            Understanding these pain points, our team of seasoned experts in
            insurance, technology, and customer service joined forces to create
            a seamless platform tailored to the needs of modern travelers. We
            envisioned a system where obtaining travel insurance would be as
            easy as booking a flight—fast, intuitive, and stress-free.
          </p>
          <p className="text-textGrayV3 leading-[25px]">
            Our platform empowers travelers by offering instant quotes,
            transparent pricing, and comprehensive coverage options, all in one
            convenient space. Whether you're a solo adventurer, a family on
            vacation, or a business professional on the move, our mission is to
            ensure you can travel with confidence, knowing you’re protected
            every step of the way.
          </p>
        </div>
        {/* img */}
        <div className="w-[652px]">
          <img src={aboutusimg2} alt="" className="rounded-[14px]" />
        </div>
      </div>
    );
};

export default OurStory;