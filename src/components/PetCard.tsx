import { motion } from "motion/react";
import { Pet } from "../../types";
import { useNavigate } from "react-router-dom";

type Props = {
  animal: Partial<Pet>;
  index: number;
};

export const PetCard = ({ animal, index }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      {index === 1 && (
        <>
          <p className="text-dark-primary font-semibold  relative top-[-1%] lg:top-[0%] left-[10%] lg:left-[30%]">
            {animal.name}, {animal.sex}
          </p>
          <img
            src="/flecha-2.png"
            alt="flecha"
            className="w-[25%] h-[10%] rotate-20 scale-y-[-1] relative left-[60%] "
          />
        </>
      )}
      <div
        className="relative h-[60%] w-[65%]  lg:h-[75%] lg:w-[300px]  overflow-hidden mr-5 min-w-48 min-h-65 bg-white rounded-3xl flex flex-col justify-center text-center"
        style={{
          transform: `${index === 1 ? "translateY(4%)" : ""}`,
        }}
      >
        {animal && animal.images ? (
          <img
            src={animal.images[0]}
            alt={animal.name}
            className="w-full object-cover h-full"
          />
        ) : (
          <p>¡No hay ningún animalito en adopción ahora mismo!</p>
        )}
        {animal && (
          <motion.button
            onClick={() => navigate(`/pet-details/${animal.id}`)}
            whileTap={{ scale: 0.9 }}
            className="absolute text-center bg-accent-light rounded-full w-[90%] self-center py-3 bottom-2 shadow cursor-pointer"
          >
            Contactar
          </motion.button>
        )}
      </div>

      {index === 0 && (
        <>
          <img
            src="/flecha-3.png"
            alt="flecha"
            className=" w-1/4 h-1/8 rotate-180 self-center relative left-[10%] mt-1.5 "
          />
          <p className="text-dark-primary font-semibold mt-1 pl-3 lg:pl-20">
            {animal.name}, {animal.sex}
          </p>
        </>
      )}
      {index === 2 && (
        <>
          <img
            src="/flecha-1.png"
            alt="flecha"
            className="w-1/4 h-1/8 rotate-0 self-center relative left-[10%] mt-1.5 "
          />
          <p className="text-dark-primary font-semibold mt-1 pl-10 lg:pl-40">
            {animal.name}, {animal.sex}
          </p>
        </>
      )}
    </div>
  );
};
