import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { AuthContext } from "../contexts/AuthContext";
import { TopRow, CategoryRow, AnimalsGrid, SortMenu } from "../components";
import { useFetchAnimals } from "../hooks";
import { SyncLoader } from "react-spinners";
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
        <div className="flex-center flex-col">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleNavigate}
            className="rounded-full px-2 py-1 bg-soft-pink w-[92%] sm:w-1/3 shadow mb-4 cursor-pointer"
          >
            Publicar una mascota
          </motion.button>
          <AnimalsGrid animals={filteredAndSortedAnimals} />
        </div>
      ) : (
        <div className="flex-center mt-10 flex-col">
          <p>No hay animalitos publicados.</p>
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="bg-accent-light font-sans py-3 shadow-xs px-6 rounded-full mt-6 cursor-pointer"
            onClick={handleNavigate}
          >
            {user
              ? "Hacer una publicación"
              : "Inicia sesión para hacer una publicación"}
          </motion.button>
        </div>
      )}
    </>
  );
};
