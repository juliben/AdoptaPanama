import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import supabase from "../supabase/supabase";
import { TopRow, Wave, FloatingButton } from "../components";
import { Pet } from "../../types";

import { IoIosPin } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { IoMdMale } from "react-icons/io";
import { SyncLoader } from "react-spinners";

export const PetDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchAnimal = async () => {
      try {
        const { data, error } = await supabase
          .from("pets")
          .select("*")
          .eq("id", id)
          .single();
        if (error) throw error;
        setAnimal(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimal();
  }, [id]);

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
      <TopRow />
      <Wave />

      <div className="flex flex-col items-center mt-10">
        <img
          src={animal.images[0]}
          alt={animal.name}
          className={`min-w-[70%] max-h-[50vh] object-cover rounded-2xl shadow mb-3 z-2  border-2 ${
            animal.sex === "hembra" ? "border-pink-300" : "border-blue-300"
          }`}
        />

        <div className="flex flex-col flex-start gap-1.5 z-1  w-[70%]">
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
          <FloatingButton />
          <p className="text-gray-600 rounded-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            officia esse illum qui
          </p>
        </div>
      </div>
    </>
  );
};
