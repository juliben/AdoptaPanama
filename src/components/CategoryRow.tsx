import { motion } from "motion/react";
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
        style={{ fontSize: "1.0rem" }}
      >
        Todos
      </p>
      <p
        onClick={() => setSelectedCategory("dog")}
        className={isSelected("dog") ? "category-selected" : "category"}
        style={{ fontSize: "1.0rem" }}
      >
        Perros
      </p>
      <p
        onClick={() => setSelectedCategory("cat")}
        className={isSelected("cat") ? "category-selected" : "category"}
        style={{ fontSize: "1.0rem" }}
      >
        Gatos
      </p>
      <p
        onClick={() => setSelectedCategory("other")}
        className={isSelected("other") ? "category-selected" : "category"}
        style={{ fontSize: "1.0rem" }}
      >
        Otros
      </p>
      <motion.div whileTap={{ scale: 0.9 }}>
        <FaSort
          size={25}
          onClick={() => setSortMenuVisible(!sortMenuVisible)}
          className="hover:cursor-pointer"
        />
      </motion.div>
    </div>
  );
};
