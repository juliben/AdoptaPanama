export type User = {
  id: string;
  email: string;
  created_ai: string;
  display_name: string;
  whatsapp: string;
  listings: number[];
  location: string;
  profile_image: string;
};

export type Pet = {
  id: string;
  created_at: string;
  species: string;
  sex: "macho" | "hembra";
  location: string;
  name: string;
  age: number;
  breed: string;
  images: string[];
  type: string;
  description: string;
  user: number; // ID of the user who listed the pet
  adopted: boolean;
};

export type SortMethod =
  | "oldestPosted"
  | "newestPosted"
  | "ageDescending"
  | "ageAscending";
