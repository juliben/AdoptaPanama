import { useNavigate } from "react-router-dom";
import { Pet } from "../../types";

type Props = {
  pet: Pet;
};

export const PetContainer = ({ pet }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pet-details/1`);
  };
  return (
    <div
      className="relative h-[250px] rounded-2xl overflow-hidden"
      onClick={handleNavigate}
    >
      <img src="/gatito.png" alt="" className="bg-light-gray object-cover" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 min-w-2/3 max-w-[90%] truncate text-center bg-accent-light rounded-full px-3 py-1 text-lg">
        Gatito, 2
      </div>
    </div>
  );
};
