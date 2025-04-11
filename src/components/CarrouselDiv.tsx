import { PetCard, PetCardOnlyOne } from "../components";
import { useFetchAnimals } from "../hooks";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

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
      <div className="flex flex-col  h-[50%] justify-between bg-light-gray  rounded-3xl mx-2  items-start py-8 px-3">
        <h2 className="font-semibold text-3xl pl-3 mb-5">
          Animales en adopción
        </h2>
        <p className="flex-center text-center px-10">
          ¡No hay ningún animalito en adopción ahora mismo!
        </p>
        <motion.button
          onClick={handleNavigate}
          whileTap={{ scale: 0.97 }}
          className="button-pill-small text-sm mt-4 self-center"
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

  return (
    <div className="relative h-[70%] min-h-[530px] bg-light-gray flex flex-col rounded-3xl mx-2 justify-start items-start py-8 px-3">
      <h2 className="font-semibold text-3xl pl-3 mb-5">Animales en adopción</h2>
      <div className="flex flex-row w-full h-full overflow-x-scroll pl-3">
        {shownAnimals.map((animal, index) => (
          <PetCard key={index} animal={animal} index={index} />
        ))}
      </div>
      <button
        onClick={() => navigate("/listings")}
        className="outline-1 rounded-full px-5 py-2 outline-gray-400 self-center hover:cursor-pointer"
      >
        Ver todos
      </button>
    </div>
  );
};
