import { LuMenu } from "react-icons/lu";
import { motion } from "motion/react";

type Props = {
  onClick: () => void;
};

export const HamburgerMenu = ({ onClick }: Props) => {
  return (
    <div className="sm:hidden flex justify-between mx-5 mt-4 hover:cursor-pointer ">
      <motion.img
        src="/heart-green.png"
        alt="logo"
        className="w-6 h-6"
        whileTap={{
          rotate: 360,
          transition: { duration: 1, ease: "easeOut" },
        }}
      />
      <button onClick={onClick} className="hover:cursor-pointer">
        <LuMenu size={30} />
      </button>
    </div>
  );
};
