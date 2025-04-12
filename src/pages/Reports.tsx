import { ReportsGrid } from "./../components/ReportsGrid";
import { useContext } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { TopRow } from "../components";
import { useFetchReports } from "../hooks";
import { Report } from "../../types";

import { SyncLoader } from "react-spinners";

export const Reports = () => {
  const user = useContext(AuthContext);
  const { reports, loading } = useFetchReports();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (user) {
      navigate("/create-report");
    } else {
      navigate("/sign-in");
    }
  };

  if (loading) {
    return (
      <div>
        <TopRow />
        <SyncLoader
          color="#dff5b2"
          className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
        />
      </div>
    );
  }

  if (reports.length < 1) {
    return (
      <div>
        <TopRow />
        <div className="flex flex-col items-center justify-center mt-15">
          <p className="">¡No hay reportes de mascotas perdidas!</p>
          <motion.button
            onClick={handleNavigate}
            whileTap={{ scale: 0.97 }}
            className="bg-accent-light font-sans py-3 shadow-xs px-6 rounded-full mt-6"
          >
            {!user ? "Inicia sesión para crear un reporte" : "Crear un reporte"}
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <>
      <TopRow />
      <div className="flex-center flex-col mt-2">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleNavigate}
          className="rounded-full px-2 py-1 bg-soft-pink w-[92%] shadow mb-4"
        >
          Crear un reporte
        </motion.button>
      </div>
      <ReportsGrid reports={reports} />
    </>
  );
};
