import useFetchData from "@/hooks/api/useFetchData";

const MissionVission = () => {
  const { data } = useFetchData("/page/about");
  const missionvission = data?.data?.cms?.mission_vission;

  return (
    <div className="flex flex-col lg:flex-row gap-6 xl:gap-[130px]">
      {missionvission?.map((item) => (
        <div key={item?.id}>
          <h3 className="text-center xl:text-left text-2xl xl:text-[36px] text-textGray xl:leading-[44px] mb-2 xl:mb-[15px] font-bold">
            {item?.title}
          </h3>
          <p className="text-center xl:text-left text-sm xl:text-lg xl:leading-[30px] text-textGrayV3">
            {item?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MissionVission;
