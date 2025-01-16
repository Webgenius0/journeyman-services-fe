
import useFetchData from "@/hooks/api/useFetchData";
const Topsection = () => {
  const { data } = useFetchData("/about");
  const articledata = data?.data?.cms?.about_article_one;
  console.log(articledata);

  const article = data?.data?.cms?.about_article_one;
  console.log(article);
  return (
    <div className="flex flex-col xlg:flex-row gap-8">
      {/* img */}
      <div className="w-full lg:w-[652px] mx-auto">
        <img src={articledata.image} alt="" className="rounded-[14px]" />
      </div>
      {/* content */}
      <div className="w-full xl:w-[622px] space-y-2 xl:space-y-[15px]">
        <h3 className="text-textGray text-center xl:text-left font-bold xl:leading-[38px] text-2xl xl:text-[32px]">
        {articledata?.title}
        </h3>
        <p className="text-textGrayV3 xl:leading-[25px] text-center xl:text-left text-sm xl:text-base">
        {articledata?.description}
        </p>
        {/* <p className="text-textGrayV3 xl:leading-[25px] text-center xl:text-left text-sm xl:text-base">
          Affordability is at the core of our service, ensuring that
          comprehensive protection is accessible to everyone—from solo travelers
          and families to groups and frequent flyers. Our reliable plans are
          backed by trusted underwriters, providing you with the assurance that
          you’re covered against unexpected events like medical emergencies,
          trip cancellations, or lost belongings.
        </p>
        <p className="text-textGrayV3 xl:leading-[25px] text-center xl:text-left text-sm xl:text-base">
          With a user-friendly platform that offers instant quotes and secure
          policy issuance, we strive to remove the hassle and complexity often
          associated with travel insurance. Wherever your journey takes you, we
          are here to protect what matters most—your safety and your peace of
          mind.&quot;
        </p> */}
      </div>
    </div>
  );
};

export default Topsection;
