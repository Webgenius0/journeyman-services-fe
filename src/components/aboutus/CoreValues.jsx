import CoreValueList from "./CoreValueList";
import CommonTitle from "../common/CommonTitle";
import CommonWrapper from "../common/CommonWrapper";
import IntegrityIcon from "@/assets/Icons/IntegrityIcon";
import CustomerIcon from "@/assets/Icons/CustomerIcon";
import InnovationIcon from "@/assets/Icons/InnovationIcon";
import SustainabilityIcon from "@/assets/Icons/SustainabilityIcon";
import CollaborationIcon from "@/assets/Icons/CollaborationIcon";
import ExcellenceIcon from "@/assets/Icons/ExcellenceIcon";

const CoreValues = () => {
  const coreValuesData = [
    {
      title: "Integrity",
      icon: <IntegrityIcon />,
      description:
        "We are committed to staying at the forefront of technology and continuously improving our services. By integrating modern tools like instant quotes, secure payment systems, and efficient communication, we make travel insurance easier, faster, and more reliable for our customers.",
    },
    {
      title: "Innovation",
      icon: <InnovationIcon />,
      description:
        "We are committed to staying at the forefront of technology and continuously improving our services. By integrating modern tools like instant quotes, secure payment systems, and efficient communication, we make travel insurance easier, faster, and more reliable for our customers.",
    },
    {
      title: "Customer-Centricity",
      icon: <CustomerIcon />,
      description:
        "Your needs are at the heart of everything we do. We strive to provide personalized solutions, exceptional support, and a user-friendly experience that ensures every traveler feels valued and protected.",
    },
    {
      title: "Sustainability",
      icon: <SustainabilityIcon />,
      description:
        "We are dedicated to promoting eco-friendly practices by embracing paperless processes and digital solutions.By reducing our environmental footprint, we aim to support a greener future while delivering convenient and efficient services to our customers.",
    },
    {
      title: "Collaboration",
      icon: <CollaborationIcon />,
      description:
        "We believe in fostering strong partnerships with our customers, team members, and underwriters to create the best possible solutions.Through open communication and teamwork, we ensure that every policy and service is designed to meet the evolving needs of travelers worldwide",
    },
    {
      title: "Excellence",
      icon: <ExcellenceIcon />,
      description:
        "We are dedicated to achieving the highest levels of quality in everything we do. From providing accurate quotes to delivering exceptional customer support, we continually strive to exceed expectations and set new standards in travel insurance.",
    },
  ];

  return (
    <div>
      <CommonTitle>Core Values</CommonTitle>
      <p className="text-center xl:text-left text-sm xl:text-base xl:max-w-[640px] xl:leading-[25px] mt-2 xl:mt-[15px]">
        Our core values form the foundation of who we are, guiding our
        decisions, actions, and interactions. These principles drive us to
        deliver excellence, inspire innovation, and create meaningful impact in
        everything we do.
      </p>
      <CommonWrapper>
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-x-[114px] gap-4 xl:gap-y-[42px]">
          {coreValuesData.map((value, index) => (
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
