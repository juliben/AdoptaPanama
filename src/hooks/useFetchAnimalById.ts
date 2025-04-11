import { useState, useEffect } from "react";
import { Pet } from "../../types";
import supabase from "../supabase/supabase";

type Props = {
  id: string | undefined;
};

export const useFetchAnimalById = ({ id }: Props) => {
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

  return { animal, loading };
};
