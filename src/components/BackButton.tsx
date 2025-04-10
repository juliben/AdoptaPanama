import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <FaChevronLeft
      size={30}
      onClick={() => navigate(-1)}
      className="cursor-pointer  text-dark-primary z-3 hover:cursor-pointer"
    />
  );
};
