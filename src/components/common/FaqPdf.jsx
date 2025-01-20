import PdfIcon from "@/assets/Icons/PdfIcon";
import CommonWrapper from "./CommonWrapper";
import useFetchData from "@/hooks/api/useFetchData";
import LoadingComponent from "../loaders/LoadingComponent";

const FaqPdf = () => {
  const { isLoading, data } = useFetchData("/page/form");
  const pdfs = data?.data?.cms?.form_pdf;

  if (isLoading) return <LoadingComponent />;

  return (
    <CommonWrapper>
      <div className="xl:max-w-[954px]">
        <h2 className="xl:text-xl xl:leading-[34px] text-center mb-[14px]">
          Click here for Covid-19 Coronavirus travel insurance FAQs
        </h2>
        <div className="h-auto xl:h-auto border border-[#8CA2B4] py-[22px] p-4 xl:px-16 flex flex-wrap justify-evenly items-center rounded-[5px]">
          {pdfs?.map((pdf, index) => {
            const pdfUrl = JSON.parse(pdf.metadata).pdf;
            const fileName = pdfUrl.split("/").pop();

            return (
              <div
                key={index}
                className="flex flex-col items-center w-[200px] mb-4"
              >
                <a
                  href={pdfUrl}
                  download={fileName}
                  className="flex flex-col items-center w-full"
                >
                  <PdfIcon />
                  <h3 className="text-sm leading-7 text-textBlackV2 text-center mt-2">
                    {pdf.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </CommonWrapper>
  );
};

export default FaqPdf;
