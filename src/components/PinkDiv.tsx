import { motion } from "motion/react";

export const PinkDiv = () => {
  return (
    <div className="my-5 mx-2 relative rounded-3xl overflow-hidden">
      <img src="/pink-blob-bg.svg" alt="" />
      <div className="absolute top-1/4 left-1/2 z-3 text-right px-5 ">
        <img
          src="/gatito4.png"
          className="absolute bottom-[-20%] right-[100%] scale-180 brightness-150 z-0 "
        />
        <h3>Mascotas perdidas</h3>
        <p>Publica tu mascota perdida o reporta mascotas vistas</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="button-pill-small mt-2"
        >
          Ir
        </motion.button>
      </div>
    </div>
  );
};
