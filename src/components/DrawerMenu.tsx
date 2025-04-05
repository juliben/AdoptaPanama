import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

type Props = {
  onClick: () => void;
};

const DrawerMenu = ({ onClick }: Props) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ x: "100%", transition: { duration: 0.3, ease: "easeIn" } }}
      className="sm:hidden bg-dark-primary h-screen fixed w-[45%] top-0  right-0 z-50"
    >
      <div className="flex flex-col items-end m-4 text-white font-semibold">
        <IoClose size={40} className="text-white mb-10" onClick={onClick} />
        <p className="menu-text">Ver</p>
        <p className="menu-text">Ver</p>
        <p className="menu-text">Ver</p>
        <p className="menu-text">Ver</p>
      </div>
    </motion.div>
  );
};

export default DrawerMenu;
