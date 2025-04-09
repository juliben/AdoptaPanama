import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
export const TopMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden sm:flex flex-row items-center  w-screen justify-between mt-7 px-7  lg:pr-10  text-sm  lg:text-xl max-w-full lg:h-13">
      <motion.img
        whileHover={{
          rotate: 360,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        src="/heart-green.png"
        alt="logo"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-row gap-2 md:gap-10">
        <p className="hover:cursor-pointer">Mascotas Perdidas</p>|
        <p className="hover:cursor-pointer">Adoptar</p>
        {/* <p>Help</p> */}
      </div>
      {/* <div className="flex-center text-center rounded-full border border-gray-300 px-2 py-2 md:px-5 md:py-2.5 font-semibold text-xs">
        Donate
      </div> */}
    </div>
  );
};
