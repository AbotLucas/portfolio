import MotionTransition from "@/components/transition-component";
import Image from "next/image";

const AvatarContact = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-contact.png"
        width={300}
        height={300}
        className="w-[300px] h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default AvatarContact;
