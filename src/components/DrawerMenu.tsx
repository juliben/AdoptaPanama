import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { signOut } from "../supabase/auth";

type Props = {
  onClick: () => void;
};

export const DrawerMenu = ({ onClick }: Props) => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const handleSignOut = async () => {
    await signOut();
    console.log("Signed out");
    onClick();
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ x: "100%", transition: { duration: 0.3, ease: "easeIn" } }}
      className="mobile bg-dark-primary h-screen fixed w-[45%] top-0  right-0 z-50 shadow-2xl"
    >
      <div className="flex flex-col items-end m-3">
        <IoClose
          size={40}
          className="text-white mb-10 hover:cursor-pointer"
          onClick={onClick}
        />
        <p className="menu-text" onClick={() => navigate("/")}>
          Inicio
        </p>
        {user && (
          <p className="menu-text" onClick={() => navigate("/profile")}>
            Mi perfil
          </p>
        )}

        <p className="menu-text " onClick={() => navigate("/listings")}>
          Adoptar
        </p>
        <p className="menu-text" onClick={() => navigate("/reports")}>
          Mascotas Perdidas
        </p>
        <p className="menu-text" onClick={() => navigate("/contact")}>
          Contacto
        </p>
        {user && (
          <p className="menu-text mt-10" onClick={handleSignOut}>
            Cerrar sesión
          </p>
        )}
        {!user && (
          <p className="menu-text" onClick={() => navigate("/register")}>
            Crear cuenta
          </p>
        )}
        {!user && (
          <p className="menu-text" onClick={() => navigate("/sign-in")}>
            Iniciar sesión
          </p>
        )}
      </div>
    </motion.div>
  );
};
