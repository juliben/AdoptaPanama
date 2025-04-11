import { useState, useEffect } from "react";
import { Pet, User } from "../../types";
import supabase from "../supabase/supabase";

type Props = {
  user: User | null;
};
export const useFetchPosts = ({ user }: Props) => {
  const [posts, setPosts] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("pets")
        .select("*")
        .eq("user", user.id);

      if (error || !data) {
        console.log(error || "No data received");
        setPosts([]);
        setLoading(false);
        return;
      }
      const activePosts = data.filter((post: Pet) => !post.adopted);
      setPosts(activePosts || []);
      setLoading(false);
    };
    fetchPosts();
  }, [user]);
  return { posts, loading };
};
