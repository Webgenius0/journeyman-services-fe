import { infinity } from "ldrs";

infinity.register();

const LoadingComponent = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="#05355d"
      ></l-infinity>
    </div>
  );
};

export default LoadingComponent;
