import { AnimatePresence, motion } from "motion/react";
import { SortMethod } from "../../types";

type Props = {
  sortMethod: SortMethod;
  setSortMethod: (method: SortMethod) => void;
};

export function SortMenu({ sortMethod, setSortMethod }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-26 right-5 bg-accent-light shadow rounded p-4 z-1"
      >
        <p className="font-primary-semibold">Ordenar por:</p>
        <p
          onClick={() => setSortMethod("oldestPosted")}
          className={`menu-option mt-5 ${
            sortMethod === "oldestPosted" ? "underline" : ""
          } `}
        >
          Más antiguo
        </p>
        <p
          onClick={() => setSortMethod("newestPosted")}
          className={`menu-option mt-5 ${
            sortMethod === "newestPosted" ? "underline" : ""
          } `}
        >
          Más reciente
        </p>
        <p
          onClick={() => setSortMethod("ageDescending")}
          className={`menu-option mt-5 ${
            sortMethod === "ageDescending" ? "underline" : ""
          } `}
        >
          Mayor edad
        </p>
        <p
          onClick={() => setSortMethod("ageAscending")}
          className={`menu-option mt-5 ${
            sortMethod === "ageAscending" ? "underline" : ""
          } `}
        >
          Menor edad
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
