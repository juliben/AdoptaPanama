import { TopRow } from "../components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { motion } from "motion/react";

export const Fork = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const handleNavigate = () => {
    if (user) {
      navigate("/create-listing");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="h-screen">
      <TopRow />
      <motion.div
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate("/listings")}
        className="flex-center h-[20%] overflow-hidden bg-soft-pink mt-7 mx-4 rounded-3xl shadow"
      >
        <img
          src="/blob-scene-pink.png"
          className="w-full h-full object-cover"
        />
        <h4 className="absolute text-xl">Quiero adoptar</h4>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.97 }}
        onClick={handleNavigate}
        className="relative  text-center flex-center h-[20%] bg-pastel-purple mt-5 mx-4 rounded-3xl shadow overflow-hidden"
      >
        <img
          src="/blob-scene-green.png"
          className="w-full h-full object-cover"
        />
        <h4 className="absolute text-xl">Quiero publicar un animal</h4>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.97 }}
        onClick={handleNavigate}
        className="relative flex-center h-[20%] bg-pastel-purple mt-5 mx-4 rounded-3xl shadow  overflow-hidden"
      >
        <img
          src="/blob-scene-gray2.png"
          className="w-full h-full object-cover "
        />
        <h4 className="absolute text-center text-xl">
          Quiero reportar una mascota perdida
        </h4>
      </motion.div>
    </div>
  );
};
