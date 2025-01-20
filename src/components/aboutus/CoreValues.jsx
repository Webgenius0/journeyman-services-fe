import CoreValueList from "./CoreValueList";
import CommonTitle from "../common/CommonTitle";
import CommonWrapper from "../common/CommonWrapper";
import IntegrityIcon from "@/assets/Icons/IntegrityIcon";
import CustomerIcon from "@/assets/Icons/CustomerIcon";
import InnovationIcon from "@/assets/Icons/InnovationIcon";
import SustainabilityIcon from "@/assets/Icons/SustainabilityIcon";
import CollaborationIcon from "@/assets/Icons/CollaborationIcon";
import ExcellenceIcon from "@/assets/Icons/ExcellenceIcon";
import useFetchData from "@/hooks/api/useFetchData";

const CoreValues = () => {
  const { data } = useFetchData("/page/about");
  const corevalue = data?.data?.cms?.core_value;
  const corevalues = data?.data?.cms?.core_values;

  const iconMapping = {
    Integrity: <IntegrityIcon />,
    Innovation: <InnovationIcon />,
    Customer: <CustomerIcon />,
    Sustainability: <SustainabilityIcon />,
    Collaboration: <CollaborationIcon />,
    Excellence: <ExcellenceIcon />,
  };

  const mappedCoreValues = corevalues?.map((value) => ({
    ...value,
    icon: iconMapping[value.title],
  }));

  return (
    <div>
      <CommonTitle>{corevalue?.title}</CommonTitle>
      <p className="text-center xl:text-left text-sm xl:text-base xl:max-w-[640px] xl:leading-[25px] mt-2 xl:mt-[15px]">
        {corevalue?.description}
      </p>
      <CommonWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 xl:gap-x-[114px] gap-4 xl:gap-y-[42px]">
          {mappedCoreValues?.map((value, index) => (
            <CoreValueList
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </CommonWrapper>
    </div>
  );
};

export default CoreValues;
