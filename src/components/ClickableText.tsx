import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const ClickableText = ({
  children,
  className = "menu-text",
  onClick,
}: Props) => {
  return (
    <motion.p
      whileTap={{ scale: 0.97 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.p>
  );
};
