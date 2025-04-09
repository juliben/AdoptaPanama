import { Pet } from "../../types";
import { PetContainer } from "./PetContainer";

type Props = {
  animals: Pet[];
};

export const AnimalsGrid = ({ animals }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-4">
      {animals &&
        animals.map((animal) => <PetContainer pet={animal} key={animal.id} />)}
    </div>
  );
};
