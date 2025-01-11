import CommonWrapper from "@/components/common/CommonWrapper";
import TextContentPage from "@/components/common/TextContentPage";

const PrivacyStatement = () => {
  const termsContent = {
    title: "Privacy and Data Protection",
    sections: [
      {
        list: [
          "By accessing this Website, you confirm that you are eligible (for example, a person of at least 16 years) to use this Website and you agree to be bound by all of the following terms and conditions of use, These Terms govern your access to the Website except where there are separate terms and conditions relevant to particular areas of this Website, which are indicated on the appropriate Website page. If you do not agree to abide by these Terms then you should not use the Website.",
          "For clarity, in these Terms, references to are references to Journeyman Services Ltd.",
          "Unless otherwise specified, the materials on this Website are directed solely at users who access this Website from the United Kingdom.",
        ],
      },
    ],
  };

  return (
    <CommonWrapper>
      <div>
        <TextContentPage
          title={termsContent.title}
          sections={termsContent.sections}
        />
      </div>
    </CommonWrapper>
  );
};

export default PrivacyStatement;
