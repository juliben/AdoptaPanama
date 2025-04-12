import { Pet } from "../../types";
import { PetContainer } from "./PetContainer";

type Props = {
  animals: Pet[];
};

export const AnimalsGrid = ({ animals }: Props) => {
  return (
    <div
      className={`grid grid-cols-2  md:grid-cols-3 gap-2 mx-4 sm:mx-10 sm:mt-5 ${
        animals.length === 1 ? "self-start" : ""
      }`}
    >
      {animals &&
        animals.map((animal) => <PetContainer pet={animal} key={animal.id} />)}
    </div>
  );
};
