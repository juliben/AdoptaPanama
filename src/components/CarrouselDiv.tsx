import { PetCard, PetCardOnlyOne } from "../components";
import { useFetchAnimals } from "../hooks";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { PetCardTwoAnimals } from "./PetCardTwoAnimals";

export const CarrouselDiv = () => {
  const user = useContext(AuthContext);
  const { animals } = useFetchAnimals();
  const shownAnimals = animals.slice(0, 3);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (user) {
      navigate("/create-listing");
    } else {
      navigate("/sign-in");
    }
  };

  if (animals.length === 0) {
    return (
      <div className="flex flex-col min-h-[60vh] justify-between bg-light-gray  rounded-3xl  items-start py-8 px-3">
        <h2 className="font-semibold pl-3 mb-5 text-2xl md:text-3xl lg:text-5xl">
          Animales en adopción
        </h2>
        <p className="flex-center text-center px-10 sm:self-center">
          ¡No hay ningún animalito en adopción ahora mismo!
        </p>
        <motion.button
          onClick={handleNavigate}
          whileTap={{ scale: 0.97 }}
          className="button-pill"
        >
          {!user
            ? "Inicia sesión para hacer una publicación"
            : "Hacer una publicación"}
        </motion.button>
      </div>
    );
  }

  if (animals.length === 1) {
    return <PetCardOnlyOne animal={animals[0]} />;
  }

  if (animals.length === 2) {
    return   <div className="relative h-auto min-h-[530px] lg:min-h-[700px] bg-light-gray flex flex-col rounded-3xl py-8 px-4 md:px-6">
    <div className="w-full max-w-screen-xl mx-auto">
      <h2 className="font-semibold mb-5 text-2xl sm:text-3xl pl-1 sm:pl-2">
        Animales en adopción
      </h2>

      <div className="w-full overflow-x-auto sm:overflow-x-hidden sm:ml-20">
        <div className="flex flex-nowrap gap-4 sm:gap-0 px-1 sm:px-3">
          {shownAnimals.map((animal, index) => (
            <PetCardTwoAnimals key={index} animal={animal} index={index} />
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/listings")}
        className="mt-6 lg:mt-10 self-center rounded-full px-6 py-2 border border-gray-400 hover:bg-gray-100 transition"
      >
        Ver todos
      </button>
    </div>
  </div>;
  }

  return (
    <div className="relative h-auto min-h-[530px] lg:min-h-[700px] bg-light-gray flex flex-col rounded-3xl py-8 px-4 md:px-6">
      <div className="w-full max-w-screen-xl mx-auto">
        <h2 className="font-semibold mb-5 text-2xl sm:text-3xl pl-1 sm:pl-2">
          Animales en adopción
        </h2>
  
        <div className="w-full overflow-x-auto">
          <div className="flex flex-nowrap gap-4 px-1 sm:px-3">
            {shownAnimals.map((animal, index) => (
              <PetCard key={index} animal={animal} index={index} />
            ))}
          </div>
        </div>
  
        <button
          onClick={() => navigate("/listings")}
          className="mt-6 lg:mt-10 self-center rounded-full px-6 py-2 border border-gray-400 hover:bg-gray-100 transition"
        >
          Ver todos
        </button>
      </div>
    </div>
  );
  
};
