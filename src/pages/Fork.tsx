import { TopRow } from "../components";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export const Fork = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <TopRow />

      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/listings")}
        className="flex-center h-[20%] overflow-hidden bg-soft-pink mt-7 mx-4 rounded-3xl shadow"
      >
        <img
          src="/blob-scene-pink.png"
          className="w-full h-full object-cover"
        />
        <h4 className="absolute text-xl">Adopciones</h4>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/reports")}
        className="relative  text-center flex-center h-[20%] bg-pastel-purple mt-5 mx-4 rounded-3xl shadow overflow-hidden"
      >
        <img
          src="/blob-scene-green.png"
          className="w-full h-full object-cover"
        />
        <h4 className="absolute text-xl">Mascotas perdidas</h4>
      </motion.div>
    </div>
  );
};
