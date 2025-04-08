export type User = {
  id: number;
  created_ai: string;
  username: string;
  whatsapp: string;
  listings: number[];
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
