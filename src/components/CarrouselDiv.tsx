import { PetCard } from "./PetCard";

const pets = [
  {
    name: "Gatito",
    image: "/gatito.png",
  },
  {
    name: "Perro",
    image: "/perro.png",
  },
  {
    name: "Gatito",
    image: "/gatito.png",
  },
  {
    name: "Perro",
    image: "/perro.png",
  },
];

const shownPets = pets.slice(0, 3);

export const CarrouselDiv = () => {
  return (
    <div className="relative h-[70%] min-h-[530px] bg-light-gray flex flex-col  rounded-3xl mx-2 justify-start items-start py-8 px-3">
      <h2 className="font-semibold text-3xl pl-3 mb-4">Animales en adopción</h2>
      <div className="flex flex-row w-full h-full overflow-x-scroll pl-3">
        {shownPets.map((pet, index) => (
          <PetCard key={index} pet={pet} index={index} />
        ))}
      </div>
      <button className="outline-1 rounded-full px-5 py-2 outline-gray-400 self-center">
        Ver todos
      </button>
    </div>
  );
};
