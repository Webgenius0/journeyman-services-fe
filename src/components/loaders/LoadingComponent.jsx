import { trefoil } from "ldrs";

trefoil.register();

const LoadingComponent = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <l-trefoil
        size="80"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4"
        color="#FD5745"
      ></l-trefoil>
    </div>
  );
};

export default LoadingComponent;