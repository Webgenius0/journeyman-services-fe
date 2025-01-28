import CommonButton from "@/components/common/CommonButton";
import CommonWrapper from "@/components/common/CommonWrapper";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import errorimg from "@/assets/error.png";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <CommonWrapper>
        <div className="h-full">
          <div className="flex justify-center mb-8">
            <img src={errorimg} alt="Error" className="w-64" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-textGray xl:text-[40px] lg:text-3xl text-2xl font-semibold leading-[48px] mb-5">
              Oops! page not found
            </h3>

            <CommonButton
              linkUrl="/"
              className="rounded-full mb-12 text-white px-4 py-2"
            >
              Go Back to Home
            </CommonButton>
          </div>
        </div>
      </CommonWrapper>
      <Footer />
    </div>
  );
};

export default ErrorPage;
