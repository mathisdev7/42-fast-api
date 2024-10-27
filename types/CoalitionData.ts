export type CoalitionData = {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  cover_url: string;
  color: string;
  score: number;
  user_id: number;
};

export type CoalitionUser = {
  id: number;
  coalition_id: number;
  user_id: number;
  score: number;
  rank: number;
  created_at: string;
  updated_at: string;
};
