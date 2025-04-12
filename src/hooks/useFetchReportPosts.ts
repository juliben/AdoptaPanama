import { useState, useEffect, useContext } from "react";
import supabase from "../supabase/supabase";

import { AuthContext } from "../contexts/AuthContext";
import { Report } from "../../types";

export const useFetchReportPosts = () => {
  const user = useContext(AuthContext);
  const [reports, setReports] = useState<Report[]>([]);

  const [loading, setLoading] = useState(false);

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
      const activePosts = data.filter(
        (post: Report) => !post.found && !post.deleted
      );
      setReports(activePosts);
      setLoading(false);
    };
    fetchReports();
  }, [user]);

  return { reports, loading };
};
