const TextContentPage = ({ title, sections }) => {
    return (
      <div>
        <h1 className="text-[36px] font-bold mb-8">{title}</h1>
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            {section.text && <p className="mb-2">{section.text}</p>}
            {section.list && (
              <ul className="list-decimal pl-3 space-y-8 text-textGrayV3">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default TextContentPage;
  