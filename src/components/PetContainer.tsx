import { useNavigate } from "react-router-dom";
import { Pet } from "../../types";

type Props = {
  pet: Pet;
};

export const PetContainer = ({ pet }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pet-details/${pet.id}`);
  };
  return (
    <div
      className="relative h-[250px] sm:h-[320px] sm:w-[250px] rounded-2xl overflow-hidden cursor-pointer shadow"
      onClick={handleNavigate}
    >
   {pet.images &&   <img
        src={pet.images[0]}
        alt={pet.name}
        className="bg-light-gray object-cover w-full h-full"
      />}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 min-w-2/3 max-w-[90%] truncate text-center bg-accent-light rounded-full px-3 py-1 text-lg">
        {pet.name}, {pet.age}
      </div>
    </div>
  );
};
