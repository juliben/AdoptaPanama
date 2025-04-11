import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { motion } from "motion/react";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <motion.div whileTap={{ scale: 0.99 }}>
      <FaChevronLeft
        size={30}
        onClick={() => navigate(-1)}
        className="cursor-pointer  text-dark-primary z-3 hover:cursor-pointer"
      />
    </motion.div>
  );
};
