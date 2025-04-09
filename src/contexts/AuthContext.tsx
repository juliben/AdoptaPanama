import { createContext, useState, useEffect } from "react";
import supabase from "../supabase/supabase";
import { User } from "@supabase/supabase-js";
import { User as UserObject } from "../../types";

const AuthContext = createContext<UserObject | null>(null);

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [userObject, setUserObject] = useState<UserObject | null>(null);

  useEffect(() => {
    if (!user) {
      setUserObject(null);
      return;
    }
    const fetchUser = async () => {
      const { data: userData, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.log(error);
      }
      if (userData) {
        setUserObject(userData);
      }
    };
    fetchUser();
  }, [user]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={userObject}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
