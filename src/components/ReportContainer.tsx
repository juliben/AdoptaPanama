import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { Report } from "../../types";

import { FaChevronRight } from "react-icons/fa";

type Props = {
  report: Report;
};

export function ReportContainer({ report }: Props) {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/edit-report/${report.id}`)}
      whileTap={{
        scale: 0.97,
      }}
      className="bg-white px-0 py-0 rounded-3xl shadow-xs overflow-hidden mt-4"
    >
      <div className="flex flex-row justify-between items-center pr-10 ">
        <img
          src={report.images[0]}
          className="h-30 w-30 object-cover flex-center "
        />
        <div className="flex flex-row flex-center gap-2">
          <h2 className=" font-primary-semibold text-end ">
            Reporte de mascota perdida
          </h2>
          <FaChevronRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}
