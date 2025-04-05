import { LuMenu } from "react-icons/lu";
import { motion } from "motion/react";

type Props = {
  onClick: () => void;
};

const HamburgerMenu = ({ onClick }: Props) => {
  return (
    <div className="sm:hidden flex justify-between mx-5 mt-4 ">
      <motion.img
        src="/heart-green.png"
        alt="logo"
        className="w-6 h-6"
        whileTap={{
          rotate: 360,
          transition: { duration: 1, ease: "easeOut" },
        }}
      />
      <button onClick={onClick}>
        <LuMenu size={30} />
      </button>
    </div>
  );
};

export default HamburgerMenu;
