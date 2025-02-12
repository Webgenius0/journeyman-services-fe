import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";
import mapBg from "../../assets/dot-map-purple-bg.svg";
import CommonWrapper from "../common/CommonWrapper";
import CommonTitle from "../common/CommonTitle";
import useFetchData from "@/hooks/api/useFetchData";

const ReviewComponent = ({ info }) => {
  const metadata = JSON.parse(info.metadata || "{}");
  const rating = metadata.rating ? parseInt(metadata.rating, 10) : 0;
};

ReviewComponent.propTypes = {
  info: PropTypes.object,
};

const TestimonialArea = () => {
  const { data } = useFetchData("/page/home");
  const reviews = data?.data?.cms?.testimonial || [];
  console.log(reviews)
  return (
    <section>
      <CommonWrapper noContainer>
        <div
          style={{
            backgroundImage: `url(${mapBg})`,
          }}
          className="bg-[#E6EBEF] bg-cover bg-center"
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
