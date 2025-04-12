import { useState, useEffect } from "react";
import { Report } from "../../types";
import supabase from "../supabase/supabase";

type Props = {
  id: string | undefined;
};

export const useFetchReportById = ({ id }: Props) => {
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchReport = async () => {
      try {
        const { data, error } = await supabase
          .from("reports")
          .select("*")
          .eq("id", id)
          .single();
        if (error) throw error;
        setReport(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, [id]);

  return { report, loading };
};
