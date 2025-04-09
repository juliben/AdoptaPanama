import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { TopRow, CategoryRow, AnimalsGrid, SortMenu } from "../components";
import { useFetchAnimals } from "../hooks";
import { SyncLoader } from "react-spinners";

export const Listings = () => {
  const { animals, loading } = useFetchAnimals();
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
      {loading ? (
        <SyncLoader
          color="#dff5b2"
          className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
        />
      ) : animals.length > 0 ? (
        <AnimalsGrid animals={animals} />
      ) : (
        <div className="flex-center mt-10 flex-col">
          <p>No hay animalitos en adopción.</p>
          <button
            className="bg-accent-light font-primary-semibold py-3 px-4 rounded-full mt-6"
            onClick={handleNavigate}
          >
            {user
              ? "Hacer una publicación"
              : "Iniciar sesión para hacer una publicación"}
          </button>
        </div>
      )}
    </>
  );
};
