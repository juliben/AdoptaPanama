export type User = {
  id: number;
  email: string;
  created_ai: string;
  display_name: string;
  whatsapp: string;
  listings: number[];
  location: string;
  profile_image: string;
};

export type Pet = {
  id: number;
  created_at: string;
  species: string;
  name: string;
  age: number;
  breed: string;
  images: string[];
  type: string;
  description: string;
  user: number; // ID of the user who listed the pet
  adopted: boolean;
};
