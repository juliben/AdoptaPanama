import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

type Props = {
  onClick: () => void;
};

export const DrawerMenu = ({ onClick }: Props) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ x: "100%", transition: { duration: 0.3, ease: "easeIn" } }}
      className="mobile bg-dark-primary h-screen fixed w-[45%] top-0  right-0 z-50 shadow-2xl"
    >
      <div className="flex flex-col items-end m-3">
        <IoClose size={40} className="text-white mb-10" onClick={onClick} />
        <p className="menu-text">Iniciar sesión</p>
        <p className="menu-text">Adoptar</p>
        <p className="menu-text">Mascotas Perdidas</p>
        <p className="menu-text">Contacto</p>
      </div>
    </motion.div>
  );
};
