import { FaSort } from "react-icons/fa";

type Props = {
  setSelectedCategory: (category: string) => void;
  isSelected: (category: string) => boolean;
  setSortMenuVisible: (visible: boolean) => void;
  sortMenuVisible: boolean;
};

export const CategoryRow = ({
  setSelectedCategory,
  isSelected,
  setSortMenuVisible,
  sortMenuVisible,
}: Props) => {
  return (
    <div className="flex flex-row mx-4 my-5 justify-center items-center">
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
      <FaSort
        size={25}
        onClick={() => setSortMenuVisible(!sortMenuVisible)}
        className="hover:cursor-pointer"
      />
    </div>
  );
};
