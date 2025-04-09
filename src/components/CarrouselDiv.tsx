import { PetCard } from "./PetCard";
import { useFetchAnimals } from "../hooks";
import { useNavigate } from "react-router-dom";

export const CarrouselDiv = () => {
  const { animals } = useFetchAnimals();
  const shownAnimals = animals.slice(0, 3);
  const navigate = useNavigate();

  if (shownAnimals.length === 1) {
    return (
      <>
        <div className="relative h-[70%] min-h-[500px] bg-light-gray flex flex-col rounded-3xl mx-2 py-8 px-3">
          <h2 className="font-semibold text-3xl pl-3 mb-5">
            Animales en adopción
          </h2>
          <img
            src={shownAnimals[0].image}
            alt={shownAnimals[0].name}
            className="w-[200px] h-[250px] object-cover rounded-3xl self-center"
          />

          <div className="flex flex-row mt-2 self-center items-center">
            <p className="text-dark-primary font-semibold pl-9 mb-4 mt-10">
              {shownAnimals[0].name}, {shownAnimals[0].sex}
            </p>
            <img
              src="/flecha-2.png"
              alt="flecha"
              className="w-15 h-12 flip rotate-250  "
            />
          </div>

          <button className="outline-1 rounded-full px-5 py-2 mt-5 outline-gray-400 self-center">
            Ver todos
          </button>
        </div>
      </>
    );
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
