import bannerImg from "../../assets/faq-banner.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CommonWrapper from "../common/CommonWrapper";
import CommonTitle from "../common/CommonTitle";
import CommonButton from "../common/CommonButton";
import PlaneIcon from "@/assets/Icons/PlaneIcon";

const FaqArea = ({ faqList, faq }) => {
  return (
    <section>
      <CommonWrapper>
        <div className="flex flex-col xlg:flex-row gap-[60px] xl:gap-[120px]">
          <div className="2xl:min-w-[725px]">
            <div className="w-full space-y-8 flex-1">
              <CommonTitle>{faq.title}</CommonTitle>

              <div>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqList.map((item, index) => (
                    <AccordionItem
                      value={`item-${index + 1}`}
                      key={index}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="rounded-[6px] bg-[#E6EBEF] px-3 xlg:px-6 py-2 xlg:py-4 text-sm xlg:text-lg font-semibold leading-6 hover:no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="mt-4 rounded-[6px] bg-white p-7 text-base leading-6 text-textGray">
                        {item.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="mt-6 xl:mt-[60px] flex justify-center xl:justify-normal">
              <CommonButton
                linkUrl="/information-input"
                className="py-3 px-7"
                icon={<PlaneIcon />}
              >
                Get a quote now
              </CommonButton>
            </div>
          </div>
          <div className="mx-auto h-full 2xl:min-w-[500px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[500px] xlg:w-full xlg:flex-1">
            <img
              src={faq?.image}
              alt="faq-banner-image"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default FaqArea;
