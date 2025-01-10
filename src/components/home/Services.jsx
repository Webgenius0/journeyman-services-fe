import Marquee from "react-fast-marquee";
import CommonWrapper from "../common/CommonWrapper";
import FlowerIcon from "../../assets/Icons/FlowerIcon";
const ReviewComponent = ({ info }) => {
  return (
    <div className="flex items-center gap-6 py-5">
      <div>
        <FlowerIcon />
      </div>
      <div>
        <h3 className="text-[20px] leading-6 text-white">{info.title}</h3>
      </div>
    </div>
  );
};

const Services = () => {
  const reviews = [
    {
      title:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      title:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      title:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      title:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      title:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      title:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      title:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
  ];

  return (
      <CommonWrapper noContainer>
        <div className="bg-primaryBlue bg-cover bg-center">
          <div className="my-14 space-y-7">
            <Marquee>
              <div className="mx-6 flex items-center gap-6">
                {reviews.map((item, index) => (
                  <ReviewComponent key={index} info={item} />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </CommonWrapper>
  );
};

export default Services;
