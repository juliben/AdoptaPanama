import { SortMenu } from "./../components/SortMenu";
import { ListingsComponent } from "./../components/ListingsComponent";
import { useState, useEffect, useContext } from "react";
import { TopRow, CategoryRow } from "../components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Listings = () => {
  const [animals, setAnimals] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortMenuVisible, setSortMenuVisible] = useState(false);
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const isSelected = (category: string) => {
    return selectedCategory === category;
  };

  const handleNavigate = () => {
    if (user) {
      navigate("/create-listing");
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      <TopRow />
      <CategoryRow
        setSelectedCategory={setSelectedCategory}
        isSelected={isSelected}
        setSortMenuVisible={setSortMenuVisible}
        sortMenuVisible={sortMenuVisible}
      />
      {sortMenuVisible && <SortMenu />}
      {animals.length > 0 ? (
        <ListingsComponent />
      ) : (
        <div className="flex-center mt-10 flex-col">
          <p>No hay animalitos en adopción.</p>
          <button
            className="bg-accent-light font-primary-semibold py-3 px-4 rounded-full mt-6"
            onClick={handleNavigate}
          >
            Hacer una publicación
          </button>
        </div>
      )}
    </>
  );
};
