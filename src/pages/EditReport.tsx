import { useParams } from "react-router-dom";

import {
  TopRow,
  Wave,
  EditReportFloatingButton,
  BackButton,
  EmblaCarousel,
} from "../components";
import { useFetchReportById } from "../hooks";

import { SyncLoader } from "react-spinners";

export const EditReport = () => {
  const { id } = useParams();
  const { report, loading } = useFetchReportById({ id });

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

  if (!report) {
    return <div>Animal not found</div>;
  }

  return (
    <>
      <Wave />
      <BackButton />

      <div className="flex flex-col items-center mt-5">
        <EmblaCarousel slides={report.images} />

        <div className="flex flex-col flex-start gap-1.5 z-1  w-[70%] mt-5">
          <div className="flex flex-col items-start gap-1">
            <h3 className="font-primary-semibold mr-2">Mascota perdida</h3>
            <p>
              Teléfono de contacto:{" "}
              <span className="text-primary">{report.contact}</span>
            </p>
            <p>
              Visto por última vez:{" "}
              <span className="text-primary">{report.location}</span>
            </p>
          </div>

          <EditReportFloatingButton id={report.id} />
          <p className="text-gray-600 rounded-2xl">{report.description}</p>
        </div>
      </div>
    </>
  );
};
