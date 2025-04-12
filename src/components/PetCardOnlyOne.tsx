import { useNavigate } from "react-router-dom";
import { Pet } from "../../types";
import { motion } from "motion/react";

type Props = {
  animal: Pet;
};

export const PetCardOnlyOne = ({ animal }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative h-[70%] min-h-[500px] bg-light-gray flex flex-col rounded-3xl mx-2 py-8 px-3">
        <h3 className="font-semibold pl-3 mb-5">Animales en adopción</h3>
        <div
          onClick={() => navigate(`/pet-details/${animal.id}`)}
          className="relative flex-center w-fit self-center "
        >
          <img
            src={animal.images[0]}
            alt={animal.name}
            className="w-[200px] h-[250px] object-cover rounded-3xl self-center shadow"
          />
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            className="absolute text-center bg-accent-light rounded-full w-[90%] self-center py-3 bottom-2 shadow"
          >
            Contactar
          </motion.button>
        </div>

        <div className="flex flex-row mt-2 self-center items-center">
          <p className="text-dark-primary font-semibold pl-9 mb-4 mt-10">
            {animal.name}, {animal.sex}
          </p>

          <img
            src="/flecha-2.png"
            alt="flecha"
            className="w-15 h-12 flip rotate-250  "
          />
        </div>

        <button
          onClick={() => navigate("/listings")}
          className="outline-1 rounded-full px-5 py-2 mt-5 outline-gray-400 self-center"
        >
          Ver todos
        </button>
      </div>
    </>
  );
};
