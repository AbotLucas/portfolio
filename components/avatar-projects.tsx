import MotionTransition from "@/components/transition-component";
import Image from "next/image";

const Avatar = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 right-10 hidden xl:inline-block md:absolute 2xl:bottom-50 2xl:right-90"
    >
      <Image
        src="/avatar-projects.png"
        width={300}
        height={300}
        className="w-full h-full position-fixed 2xl:h-[450px] 2xl:w-[300px]"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default Avatar;
