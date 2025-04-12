import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export const PinkDiv = () => {
  const navigate = useNavigate();
  return (
    <div className="mobile my-5 relative rounded-3xl overflow-hidden  ">
      <img src="/pink-blob-bg.svg" alt="" className="w-full" />
      <div className="absolute top-1/4 left-1/2 z-3 text-right px-5">
        <img
          src="/perrito.png"
          className="absolute bottom-[-15%] right-[93%] scale-185 brightness-110 z-0"
        />
        <h3 className="mb-2">Mascotas perdidas</h3>
        <p className="mb-2">Reporta una mascota perdida</p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="button-pill mt-2"
          onClick={() => navigate("/reports")}
        >
          Ir
        </motion.button>
      </div>
    </div>
  );
};
