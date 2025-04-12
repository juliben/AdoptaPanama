import { useNavigate } from "react-router-dom";
import { Report } from "../../types";
import { formatDate } from "../services/formatDate";

type Props = {
  reports: Report[];
};

export const ReportsGrid = ({ reports }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mx-4">
      {reports.map((report: Report) => (
        <div
          className="relative h-[250px] rounded-2xl overflow-hidden cursor-pointer shadow"
          onClick={() => navigate(`/report-details/${report.id}`)}
        >
          <img
            src={report.images[0]}
            alt={report.title}
            className="bg-light-gray object-cover w-full h-full"
          />

          <div className="text-gray-800 absolute bottom-2 left-1/2 -translate-x-1/2 min-w-[90%] max-w-[100%] truncate  bg-accent-light rounded-2xl shadow px-3 py-1.5 text-lg">
            <p> {report.location}</p>
            <p className="text-gray-800" style={{ fontSize: "1rem" }}>
              {formatDate(report.date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
