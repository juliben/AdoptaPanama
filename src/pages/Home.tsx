import { TopMenu, LinePath, DogBlob } from "../components";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="lg:mx-10 ">
      <TopMenu />

      <div className="relative  bg-light-gray m-5 rounded-4xl  overflow-hidden md:h-130 lg:h-168 pb-10  z-1 ">
        <LinePath />
        <img
          src="/cat-blob.png"
          alt="cat-blob"
          className="absolute w-1/3 top-[18%] left-[10%] "
          style={{ clipPath: "url(#blob-two)" }}
        />
        <div className="bg-light-gray absolute h-[12%] w-[25%] bottom-[33%] left-[15%] sm:bottom-[28%] lg:bottom-[16%] lg:w-[28%] lg:h-[20%]  -rotate-6 rounded-full   " />

        <div className="bg-light-gray absolute h-[10%] w-[20%] top-[30%]  right-[26%] sm:top-[32%] md:top-[35%] -rotate-25 sm:-rotate-30 rounded-full z-1 lg:hidden" />
        <div className="pill -rotate-10 absolute top-[14%] left-[36%]">
          GATOS
        </div>
        <div className="pill rotate-8 absolute top-[27%] left-[45%] z-2">
          PERROS
        </div>

        <div className="absolute top-[23%] right-[3%] w-[45%] ">
          <DogBlob />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="button-pill -rotate-13 absolute bottom-[14%] left-[33%] hover:cursor-pointer"
        >
          COMENZAR
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
