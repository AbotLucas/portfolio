import MotionTransition from "@/components/transition-component";
import Image from "next/image";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-aboutme.png"
        width={300}
        height={300}
        className="w-full h-full 2xl:w-140 position-fixed"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default Avatar;
