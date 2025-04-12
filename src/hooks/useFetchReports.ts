import { useState, useEffect } from "react";
import { Report } from "../../types";
import supabase from "../supabase/supabase";

export const useFetchReports = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchReports = async () => {
      try {
        const { data, error } = await supabase.from("reports").select("*");
        if (error) throw error;

        const activeReports = data.filter((report: Report) => !report.found);
        setReports(activeReports || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  return { reports, loading };
};
