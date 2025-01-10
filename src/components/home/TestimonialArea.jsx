
import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";
import mapBg from "../../assets/dot-map-purple-bg.svg";
import CommonWrapper from "../common/CommonWrapper";
import CommonTitle from "../common/CommonTitle";

const ReviewComponent = ({ info }) => {
  return (
    <div className="w-[312px] space-y-8 rounded-xl bg-white px-6 py-[18px]">
      <div className="flex items-center gap-4">
        <div className="h-11 w-11 overflow-hidden rounded-full">
          <img
            src={info.image}
            alt="reviewer-image"
            className="h-full w-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-jakarta font-bold leading-6 text-textBlack">
            {" "}
            {info.name}{" "}
          </p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <span key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M6.60178 4.10562C7.44622 2.59079 7.86843 1.83337 8.49967 1.83337C9.13092 1.83337 9.55313 2.59079 10.3976 4.10562L10.616 4.49753C10.856 4.928 10.976 5.14323 11.163 5.28525C11.3501 5.42726 11.5831 5.47997 12.0491 5.58541L12.4733 5.68139C14.1131 6.05241 14.933 6.23792 15.1281 6.86519C15.3231 7.49247 14.7642 8.14609 13.6463 9.45332L13.3571 9.79152C13.0394 10.163 12.8806 10.3487 12.8091 10.5785C12.7376 10.8083 12.7617 11.0561 12.8097 11.5517L12.8534 12.003C13.0224 13.7471 13.1069 14.6192 12.5962 15.0069C12.0856 15.3945 11.3179 15.0411 9.78256 14.3342L9.38535 14.1513C8.94906 13.9504 8.73091 13.8499 8.49967 13.8499C8.26844 13.8499 8.05029 13.9504 7.614 14.1513L7.21679 14.3342C5.68146 15.0411 4.91379 15.3945 4.40311 15.0069C3.89242 14.6192 3.97693 13.7471 4.14594 12.003L4.18966 11.5517C4.23769 11.0561 4.26171 10.8083 4.19025 10.5785C4.11879 10.3487 3.95996 10.163 3.64229 9.79152L3.35307 9.45332C2.23517 8.14609 1.67622 7.49247 1.87129 6.86519C2.06635 6.23792 2.88625 6.05241 4.52603 5.68139L4.95027 5.58541C5.41624 5.47997 5.64923 5.42726 5.8363 5.28525C6.02338 5.14323 6.14336 4.928 6.38332 4.49753L6.60178 4.10562Z"
                    fill="#FF6C0A"
                  />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-base leading-6 text-textGray">{info.description}</p>
    </div>
  );
};

ReviewComponent.propTypes = {
  info: PropTypes.object,
};

const TestimonialArea = () => {
  const reviews = [
    {
      name: "Natali jackson",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      name: "Natali jackson",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      name: "Natali jackson",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      name: "Natali jackson",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      name: "Natali jackson",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      name: "Natali jackson",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
    {
      name: "Natali jackson",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone ",
    },
  ];

  return (
    <section>
      <CommonWrapper noContainer>
        <div
          style={{
            backgroundImage: `url(${mapBg})`,
          }}
          className="bg-[#eeefff] bg-cover bg-center"
        >
          <CommonWrapper>
            <CommonTitle>
              Our <br className="hidden xlg:inline" /> Testimonial
            </CommonTitle>

            <div className="my-14 space-y-7">
              <Marquee gradient gradientColor="#eeefff" gradientWidth={120}>
                <div className="mx-6 flex items-center gap-6">
                  {reviews.map((item, index) => (
                    <ReviewComponent key={index} info={item} />
                  ))}
                </div>
              </Marquee>
              <Marquee
                gradient
                gradientColor="#eeefff"
                direction="right"
                gradientWidth={120}
              >
                <div className="mx-6 flex items-center gap-6">
                  {reviews.map((item, index) => (
                    <ReviewComponent key={index} info={item} />
                  ))}
                </div>
              </Marquee>
            </div>
          </CommonWrapper>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default TestimonialArea;