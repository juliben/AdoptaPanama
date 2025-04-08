import supabase from "./supabase";

export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.log("Error trying to sign up", error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.log("Error trying to log in", error);
  }
};

export const signOut = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.log("Error trying to log out", error);
  }
};
