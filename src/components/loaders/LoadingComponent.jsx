import { trefoil } from "ldrs";

trefoil.register();

const LoadingComponent = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <l-trefoil
        size="100"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.5"
        color="#05355D"
      ></l-trefoil>
    </div>
  );
};

export default LoadingComponent;
