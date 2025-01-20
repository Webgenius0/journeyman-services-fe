const CommonWrapper = ({ children, version = "", noContainer }) => {
  return (
    <div className={`${noContainer ? `` : `container`}`}>
      <div
        className={`${
          version === "lg"
            ? `py-[30px] xl:py-[120px]`
            : `py-[30px] xlg:py-[60px]`
        }`}
      >
        {children}
      </div>
    </div>
  );
};
export default CommonWrapper;
