import { useState, useEffect, useContext } from "react";
import supabase from "../supabase/supabase";

import { AuthContext } from "../contexts/AuthContext";
import { Report } from "../../types";

export const useFetchReports = () => {
  const user = useContext(AuthContext);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchReports = async () => {
      if (!user?.id) {
        return;
      }
      try {
        const { data, error } = await supabase
          .from("reports")
          .select("*")
          .eq("user", user.id);
        if (error) throw error;

        const activeReports = data.filter(
          (report: Report) => !report.found && !report.deleted
        );
        setReports(activeReports || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, [user]);

  return { reports, loading };
};
