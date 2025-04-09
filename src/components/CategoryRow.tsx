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
        onClick={() => setSelectedCategory("all")}
        className={isSelected("all") ? "category-selected" : "category"}
      >
        Todos
      </p>
      <p
        onClick={() => setSelectedCategory("dog")}
        className={isSelected("dog") ? "category-selected" : "category"}
      >
        Perros
      </p>
      <p
        onClick={() => setSelectedCategory("cat")}
        className={isSelected("cat") ? "category-selected" : "category"}
      >
        Gatos
      </p>
      <p
        onClick={() => setSelectedCategory("other")}
        className={isSelected("other") ? "category-selected" : "category"}
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
