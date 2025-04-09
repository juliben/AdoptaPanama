import { useState, useEffect } from "react";
import { Pet } from "../../types";
import supabase from "../supabase/supabase";

export const useFetchAnimals = () => {
  const [animals, setAnimals] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchAnimals = async () => {
      try {
        const { data, error } = await supabase.from("pets").select("*");
        if (error) throw error;
        setAnimals(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  return { animals, loading };
};
