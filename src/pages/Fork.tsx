import { TopRow } from "../components";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export const Fork = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <TopRow />
      <div className="flex flex-col sm:flex-row h-screen">
        <div className="flex-1 flex items-center justify-center bg-soft-pink p-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl mb-4">Adopciones</h2>
            <p className="text-base sm:text-lg mb-4">
              Encuentra o publica una mascota para adoptar.
            </p>
            <motion.button
              onClick={() => navigate("/listings")}
              whileTap={{ scale: 0.97 }}
              className="button-pill bg-light-gray"
            >
              Ir a adopciones
            </motion.button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-pastel-purple p-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl mb-4">Mascotas perdidas</h2>
            <p className="text-base sm:text-lg mb-4">
              Publica una mascota perdida.
            </p>
            <motion.button
              onClick={() => navigate("/reports")}
              whileTap={{ scale: 0.97 }}
              className="button-pill bg-light-gray"
            >
              Ir a reportes
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
