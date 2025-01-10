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

const FaqArea = () => {
  const faqList = [
    {
      question: "What is travel insurance, and why do I need it?",
      answer:
        "Travel insurance provides financial protection during your trips. It covers unexpected events like medical emergencies, trip cancellations, or lost belongings, ensuring peace of mind while traveling.",
    },
    {
      question: "How is my insurance quote calculated?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
    {
      question: "Can I purchase insurance for multiple travelers at once?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
    {
      question: "How do I pay for my policy?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    },
  ];

  return (
    <section>
      <CommonWrapper>
        <div className="flex flex-col items-start gap-10 xlg:flex-row xl:gap-[120px]">
          <div>
            <div className="w-full space-y-8 xlg:flex-1">
              <CommonTitle>
                Frequently <br className="hidden xlg:inline" /> Asked Questions
              </CommonTitle>

              <div>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqList.map((item, index) => (
                    <AccordionItem
                      value={`item-${index + 1}`}
                      key={index}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="rounded-[6px] bg-[#E6EBEF] px-4 xlg:px-6 py-3 xlg:py-4 xlg:text-lg font-semibold leading-6 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="mt-4 rounded-[6px] bg-white p-7 text-base leading-6 text-textGray">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="mt-[60px]">
              <CommonButton>Get a quote now</CommonButton>
            </div>
          </div>
          <div className="mx-auto h-full w-[70%] md:h-[450px] lg:h-[600px] xlg:w-full xlg:flex-1">
            <img
              src={bannerImg}
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
