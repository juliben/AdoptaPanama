import { motion } from "motion/react";
import { DogBlob } from "./DogBlob";
import { LinePath } from "./LinePath";

export function MainBanner() {
  return (
    <div className="main-banner">
      <LinePath />
      <img
        src="/cat-blob.png"
        alt="cat-blob"
        className="absolute w-2/3 top-[10%] left-[1%] -rotate-10 sm:rotate-0 sm:w-1/3 sm:top-[18%] sm:left-[10%] "
        style={{
          clipPath: "url(#blob-two)",
        }}
      />
      <div className="desktop gray-patch-1" />
      <div className="desktop gray-patch-2" />
      <div className="desktop pill -rotate-10 absolute top-[14%] left-[36%]">
        GATOS
      </div>
      <div className="desktop pill rotate-8 absolute top-[27%] left-[45%] z-2">
        PERROS
      </div>

      <div className="absolute top-[30%] right-[-10%] w-[88%] sm:top-[23%] sm:right-[3%] sm:w-[45%] ">
        <DogBlob />
      </div>

      <motion.button
        animate={{
          rotate: [0, 4, -4, 4, -4, 0],
          transition: { delay: 2, duration: 0.5 },
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="button-pill -rotate-13 absolute bottom-[10%] left-[10%]  sm:bottom-[14%] sm:left-[33%] hover:cursor-pointer"
      >
        COMENZAR
      </motion.button>
    </div>
  );
}
