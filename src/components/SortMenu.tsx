import { SortMethod } from "../../types";

type Props = {
  sortMethod: SortMethod;
  setSortMethod: (method: SortMethod) => void;
  setSortMenuVisible: (visible: boolean) => void;
};

export function SortMenu({
  sortMethod,
  setSortMethod,
  setSortMenuVisible,
}: Props) {
  const handleClick = (sortMethod: SortMethod) => {
    setSortMethod(sortMethod);
    setSortMenuVisible(false);
  };

  return (
    <div className="absolute top-26 right-5 bg-accent-light shadow rounded p-4 z-1">
      <p className="font-primary-semibold">Ordenar por:</p>
      <p
        onClick={() => handleClick("oldestPosted")}
        className={`menu-option mt-5 cursor-pointer ${
          sortMethod === "oldestPosted" ? "underline" : ""
        } `}
      >
        Más antiguo
      </p>
      <p
        onClick={() => handleClick("newestPosted")}
        className={`menu-option mt-5 cursor-pointer ${
          sortMethod === "newestPosted" ? "underline" : ""
        } `}
      >
        Más reciente
      </p>
      <p
        onClick={() => handleClick("ageDescending")}
        className={`menu-option mt-5 cursor-pointer ${
          sortMethod === "ageDescending" ? "underline" : ""
        } `}
      >
        Mayor edad
      </p>
      <p
        onClick={() => handleClick("ageAscending")}
        className={`menu-option mt-5 cursor-pointer ${
          sortMethod === "ageAscending" ? "underline" : ""
        } `}
      >
        Menor edad
      </p>
    </div>
  );
}
