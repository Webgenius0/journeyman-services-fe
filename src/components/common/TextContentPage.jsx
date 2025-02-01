const TextContentPage = ({ title, content }) => {
  return (
    <div>
      <h1 className="text-[36px] font-bold mb-8">{title}</h1>
      <p className="text-textGrayV3">{content}</p>
    </div>
  );
};

export default TextContentPage;
