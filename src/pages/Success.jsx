import Done from "@/assets/Icons/Done";
const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div>
        <div className="flex justify-center">
          <Done />
        </div>
        <h3 className="xl:text-4xl font-semibold text-gray-800 mb-4">
          Your payment was successfully completed!
        </h3>
        <p className="text-lg text-center text-gray-600">
          Your transaction is being processed.
        </p>
      </div>
    </div>
  );
};

export default Success;
