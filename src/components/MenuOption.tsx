import { JSX } from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  icon: JSX.Element;
  onClick?: () => void;
};

export const MenuOption = ({ title, icon, onClick }: Props) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex flex-row items-center gap-2 bg-white px-5 py-4 rounded-full cursor-pointer"
    >
      {icon}
      <p>{title}</p>
    </motion.div>
  );
};
