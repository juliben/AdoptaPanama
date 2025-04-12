import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { AuthContext } from "../contexts/AuthContext";

export const TopMenu = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="desktop flex-row items-center w-screen justify-between mt-7 px-7  lg:pr-10  text-sm  sm:text-lg max-w-full lg:h-13 sm:mb-5">
      <motion.img
        whileHover={{
          rotate: 360,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        src="/heart-green.png"
        alt="logo"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-row gap-2 md:gap-10 ">
        <p
          onClick={() => navigate("/listings")}
          className="hover:cursor-pointer"
        >
          Adopciones
        </p>
        <p
          onClick={() => navigate("/reports")}
          className="hover:cursor-pointer"
        >
          Mascotas Perdidas
        </p>
      </div>
      {location.pathname === "/" && !user && (
        <div
          onClick={() => navigate("/sign-in")}
          className="flex-center text-center rounded-full border border-gray-300 px-2 py-2 md:px-5 md:py-2.5 font-semibold text-xs cursor-pointer"
        >
          Iniciar sesión
        </div>
      )}
      {location.pathname !== "/profile" && user && (
        <div
          onClick={() => navigate("/profile")}
          className="flex-center text-center rounded-full border border-gray-300 px-2 py-2 md:px-5 md:py-2.5 font-semibold text-xs cursor-pointer"
        >
          Mi cuenta
        </div>
      )}
    </div>
  );
};
