import {
  TopMenu,
  LinePath,
  BlobOne,
  BlobTwo,
  BlobTwoClipPath,
} from "../components";
import { motion } from "motion/react";
import { DogBlob } from "../components/DogBlob";

const Home = () => {
  return (
    <div className="lg:mx-10 ">
      <TopMenu />
      <div className="relative  bg-light-gray m-5 rounded-4xl  overflow-hidden md:h-130 lg:h-168 pb-10  ">
        <LinePath />
        <div className="absolute top-0 left-0 w-[45%] z-0 scale-90">
          <BlobOne />
          <img
            src="/gato.png"
            alt="gato"
            className="h-28 lg:h-100 absolute  top-[15%] left-[10%] lg:top-[17%] lg:left-[13%] z-10"
          />
        </div>
        <div className="bg-light-gray absolute h-[25%] w-[32%] bottom-[15%] left-[10%] -rotate-15 rounded-l-full lg:rounded-full lg:w-[38%] lg:h-[38%] lg:bottom-[0%] " />

        <div className="pill -rotate-10 absolute top-[14%] left-[36%]">
          GATOS
        </div>
        <div className="pill rotate-8 absolute top-[27%] left-[45%]">
          PERROS
        </div>

        <div className="absolute top-[23%] right-[3%] w-[45%] z-0">
          <div className="absolute top-[10%] left-0 w-[45%] z-0">
            <DogBlob />
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <button className="button-pill -rotate-13 absolute bottom-[14%] left-[33%] hover:cursor-pointer">
            COMENZAR
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
