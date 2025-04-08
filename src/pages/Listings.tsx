import { useState, useEffect } from "react";
import { TopRow } from "../components";

export const Listings = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const isSelected = (category: string) => {
    return selectedCategory === category;
  };

  return (
    <>
      <TopRow />
      <div className="flex flex-row mx-4 my-5">
        <p
          onClick={() => setSelectedCategory("Todos")}
          className={isSelected("Todos") ? "category-selected" : "category"}
        >
          Todos
        </p>
        <p
          onClick={() => setSelectedCategory("Perros")}
          className={isSelected("Perros") ? "category-selected" : "category"}
        >
          Perros
        </p>
        <p
          onClick={() => setSelectedCategory("Gatos")}
          className={isSelected("Gatos") ? "category-selected" : "category"}
        >
          Gatos
        </p>
        <p
          onClick={() => setSelectedCategory("Otros")}
          className={isSelected("Otros") ? "category-selected" : "category"}
        >
          Otros
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-4">
        <div className="bg-light-gray h-[250px] rounded-2xl"></div>
      </div>
    </>
  );
};
