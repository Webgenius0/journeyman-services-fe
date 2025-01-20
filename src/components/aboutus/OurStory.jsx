
import useFetchData from "@/hooks/api/useFetchData";
const OurStory = () => {
  const { data } = useFetchData("/page/about");
  const ourStoryData = data?.data?.cms?.about_article_two;
  console.log(ourStoryData);

  return (
    <div
      className="flex flex-col xlg:flex-row items-center gap-8 bg-[#F5F7F9] rounded-3xl p-4 
 xl:pt-[56px] xl:pr-[42px] xl:pb-[39px] xl:pl-[47px]"
    >
      {/* content */}
      <div className="xl:w-[622px] space-y-[15px] ">
        <h3 className="text-center xl:text-left text-textGray font-bold xl:leading-[38px] text-2xl xl:text-[32px]">
          {ourStoryData.title}
        </h3>
        <p className="text-textGrayV3 text-center xl:text-left text-sm xl:text-base xl:leading-[25px]">
        {ourStoryData.description}
        </p>
        {/* <p className="text-textGrayV3 text-center xl:text-left text-sm xl:text-base xl:leading-[25px]">
          Affordability is at the core of our service, ensuring that
          Understanding these pain points, our team of seasoned experts in
          insurance, technology, and customer service joined forces to create a
          seamless platform tailored to the needs of modern travelers. We
          envisioned a system where obtaining travel insurance would be as easy
          as booking a flight—fast, intuitive, and stress-free.
        </p>
        <p className="text-textGrayV3 text-center xl:text-left text-sm xl:text-base xl:leading-[25px]">
          Our platform empowers travelers by offering instant quotes,
          transparent pricing, and comprehensive coverage options, all in one
          convenient space. Whether you're a solo adventurer, a family on
          vacation, or a business professional on the move, our mission is to
          ensure you can travel with confidence, knowing you’re protected every
          step of the way.
        </p> */}
      </div>
      {/* img */}
      <div className="xl:w-[652px]">
        <img src={ourStoryData.image} alt="about-us" className="rounded-[14px]" />
      </div>
    </div>
  );
};

export default OurStory;
