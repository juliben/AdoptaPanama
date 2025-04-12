import { useState, useEffect, useContext } from "react";
import supabase from "../supabase/supabase";

import { AuthContext } from "../contexts/AuthContext";
import { Pet, Report } from "../../types";

export const useFetchPosts = () => {
  const user = useContext(AuthContext);
  const [pets, setPets] = useState<Pet[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const posts = [...pets, ...reports];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchPets = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("pets")
        .select("*")
        .eq("user", user.id);

      if (error || !data) {
        console.log(error || "No data received");
        setLoading(false);
        return;
      }
      const activePets = data.filter(
        (pet: Pet) => !pet.adopted && !pet.deleted
      );
      setPets(activePets);
      setLoading(false);
    };
    fetchPets();
  }, [user]);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchReports = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .eq("user", user.id);

      if (error || !data) {
        console.log(error || "No data received");
        setLoading(false);
        return;
      }
      const activeReports = data.filter(
        (report: Report) => !report.found && !report.deleted
      );
      setReports(activeReports);
      setLoading(false);
    };
    fetchReports();
  }, [user]);

  return { posts, loading };
};
