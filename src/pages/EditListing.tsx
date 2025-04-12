import { useParams } from "react-router-dom";

import {
  TopRow,
  Wave,
  EditFloatingButton,
  BackButton,
  EmblaCarousel,
} from "../components";
import { useFetchAnimalById } from "../hooks";

import { IoMdFemale, IoMdMale, IoIosPin } from "react-icons/io";
import { SyncLoader } from "react-spinners";

export const EditListing = () => {
  const { id } = useParams();
  const { animal, loading } = useFetchAnimalById({ id });

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

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <>
      <Wave />
      <BackButton />

      <div className="flex flex-col items-center mt-5">
        <EmblaCarousel slides={animal.images} />

        <div className="flex flex-col flex-start gap-1.5 z-1  w-[70%] mt-5">
          <div className="flex flex-row">
            <h3 className="font-primary-semibold mr-2">
              {animal.name}, {animal.age}
            </h3>
            <div className="flex-center flex-row text-primary">
              <IoIosPin size={18} />
              <p>{animal.location}</p>
            </div>
          </div>
          <div
            className={`flex flex-row ${
              animal.sex === "hembra" ? "text-pink-300" : "text-blue-400"
            }`}
          >
            {animal.sex === "hembra" ? (
              <IoMdFemale size={18} />
            ) : (
              <IoMdMale size={18} />
            )}
            <p>{animal.sex.charAt(0).toUpperCase() + animal.sex.slice(1)}</p>
          </div>
          <EditFloatingButton id={animal.id} />
          <p className="text-gray-600 rounded-2xl">{animal.description}</p>
        </div>
      </div>
    </>
  );
};
