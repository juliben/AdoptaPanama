import { PetContainer } from "./PetContainer";

export const ListingsComponent = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-4">
      <PetContainer />
    </div>
  );
};
