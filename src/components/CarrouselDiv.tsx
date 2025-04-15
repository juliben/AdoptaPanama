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

  return (
    <div className="relative h-[70%] min-h-[530px]  lg:min-h-[700px] bg-light-gray flex flex-col rounded-3xl justify-start items-start py-8 px-3">
      <h2 className="font-semibold pl-3 mb-5 text-2xl sm:text-3xl ">
        Animales en adopción
      </h2>
      <div className="flex flex-row w-full h-full overflow-x-scroll pl-3 lg:ml-[14%] md:ml-[10%]">
        {shownAnimals.map((animal, index) => (
          <PetCard key={index} animal={animal} index={index} />
        ))}
      </div>
      <button
        onClick={() => navigate("/listings")}
        className="outline-1 rounded-full px-5 py-2 outline-gray-400 self-center lg:mt-10 hover:cursor-pointer "
      >
        Ver todos
      </button>
    </div>
  );
};
