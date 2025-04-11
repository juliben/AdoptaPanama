import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { Pet } from "../../types";

import { FaChevronRight } from "react-icons/fa";

type Props = {
  animal: Pet;
};

export function PostContainer({ animal }: Props) {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/edit-listing/${animal.id}`)}
      whileTap={{
        scale: 0.97,
      }}
      className="bg-white px-0 py-0 rounded-3xl shadow-xs overflow-hidden mt-4"
    >
      <div className="flex flex-row justify-between items-center pr-10 ">
        <img
          src={animal.images[0]}
          className="h-30 w-30 object-cover flex-center "
        />
        <div className="flex flex-row flex-center gap-2">
          <h2 className="text-2xl font-primary-semibold ">{animal.name}</h2>
          <FaChevronRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}
