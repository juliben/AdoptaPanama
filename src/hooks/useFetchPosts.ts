import { useState, useEffect, useContext } from "react";
import supabase from "../supabase/supabase";

import { AuthContext } from "../contexts/AuthContext";
import { Pet } from "../../types";

export const useFetchPosts = () => {
  const user = useContext(AuthContext);
  const [posts, setPosts] = useState<Pet[]>([]);

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
      const activePosts = data.filter(
        (post: Pet) => !post.adopted && !post.deleted
      );
      setPosts(activePosts);
      setLoading(false);
    };
    fetchPets();
  }, [user]);

  return { posts, loading };
};
