import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { TopRow, CategoryRow, AnimalsGrid, SortMenu } from "../components";
import { useFetchAnimals } from "../hooks";
import { SyncLoader } from "react-spinners";
import Debug from "../components/Debug";
import { SortMethod } from "../../types";

export const Listings = () => {
  const { animals, loading } = useFetchAnimals();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortMenuVisible, setSortMenuVisible] = useState(false);
  const [sortMethod, setSortMethod] = useState<SortMethod>("oldestPosted");
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const isSelected = (category: string) => {
    return selectedCategory === category;
  };

  const filteredAnimals = animals.filter((animal) => {
    if (selectedCategory === "all") {
      return true;
    }
    return animal.species === selectedCategory;
  });

  const filteredAndSortedAnimals = filteredAnimals.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();

    if (sortMethod === "oldestPosted") {
      return dateA - dateB; // Sort by oldest posted
    } else if (sortMethod === "newestPosted") {
      return dateB - dateA; // Sort by newest posted
    } else if (sortMethod === "ageAscending") {
      return a.age - b.age; // Sort by youngest first
    } else if (sortMethod === "ageDescending") {
      return b.age - a.age; // Sort by oldest first
    }
    return 0; // Default to no sorting
  });

  const handleNavigate = () => {
    if (user) {
      navigate("/create-listing");
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      {/* <Debug log={dateA} /> */}
      <TopRow />
      <CategoryRow
        setSelectedCategory={setSelectedCategory}
        isSelected={isSelected}
        setSortMenuVisible={setSortMenuVisible}
        sortMenuVisible={sortMenuVisible}
      />
      {sortMenuVisible && (
        <SortMenu
          sortMethod={sortMethod}
          setSortMethod={setSortMethod}
          setSortMenuVisible={setSortMenuVisible}
        />
      )}
      {loading ? (
        <SyncLoader
          color="#dff5b2"
          className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
        />
      ) : animals.length > 0 ? (
        <AnimalsGrid animals={filteredAndSortedAnimals} />
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
