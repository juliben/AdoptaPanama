import { useState, useEffect } from "react";
import supabase from "../supabase/supabase";

export const useFetchCounts = () => {
  const [adopted, setAdopted] = useState(0);
  const [found, setFound] = useState(0);

  useEffect(() => {
    try {
      const fetchAdopted = async () => {
        const { count, error } = await supabase
          .from("pets")
          .select("*", { count: "exact" })
          .eq("adopted", true);

        if (error) {
          console.log(error || "No data received");
          return;
        }
        setAdopted(count ?? 0);
      };
      fetchAdopted();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchFound = async () => {
        const { count, error } = await supabase
          .from("reports")
          .select("*", { count: "exact" })
          .eq("found", true);

        if (error) {
          console.log(error || "No data received");
          return;
        }
        setFound(count ?? 0);
      };
      fetchFound();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    adopted,
    found,
  };
};
