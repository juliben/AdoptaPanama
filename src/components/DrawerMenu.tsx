import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { IoClose } from "react-icons/io5";

import { AuthContext } from "../contexts/AuthContext";
import { ClickableText } from "./ClickableText";

type Props = {
  onClick: () => void;
};

export const DrawerMenu = ({ onClick }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useContext(AuthContext);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ x: "100%", transition: { duration: 0.3, ease: "easeIn" } }}
      className="mobile bg-dark-primary h-screen fixed w-[45%] top-0  right-0 z-50 shadow-2xl"
    >
      <div className="flex flex-col items-end m-3">
        <motion.div whileTap={{ scale: 0.95 }}>
          <IoClose
            size={40}
            className="text-white mb-10 hover:cursor-pointer"
            onClick={onClick}
          />
        </motion.div>
        {location.pathname !== "/" && (
          <ClickableText onClick={() => navigate("/")}>Inicio</ClickableText>
        )}
        {user && (
          <ClickableText onClick={() => navigate("/profile")}>
            Mi perfil
          </ClickableText>
        )}
        {!user && (
          <ClickableText onClick={() => navigate("/register")}>
            Crear cuenta
          </ClickableText>
        )}
        {!user && (
          <ClickableText onClick={() => navigate("/sign-in")}>
            Iniciar sesión
          </ClickableText>
        )}
        <ClickableText onClick={() => navigate("/listings")}>
          Adopciones
        </ClickableText>
        <ClickableText onClick={() => navigate("/reports")}>
          Mascotas Perdidas
        </ClickableText>
      </div>
    </motion.div>
  );
};
