import { UserImage } from "./UserData";

export type Curriculum = {
  id: number;
  created_at: string;
  name: string;
  slug: string;
  kind: string;
};

export type CurriculumUser = {
  grade: string | null;
  level: number;
  skills: { id: number; name: string; level: number }[];
  blackholed_at: string | null;
  id: number;
  begin_at: string;
  end_at: string;
  cursus_id: number;
  has_coalition: boolean;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    email: string;
    login: string;
    first_name: string;
    last_name: string;
    usual_full_name: string;
    usual_first_name: null | string;
    url: string;
    phone: string;
    displayname: string;
    kind: string;
    image: UserImage;
    "staff?": boolean;
    correction_point: number;
    pool_month: string;
    pool_year: string;
    location: null | string;
    wallet: number;
    anonymize_date: string;
    data_erasure_date: string;
    created_at: string;
    updated_at: string;
    alumnized_at: null | string;
    "alumni?": boolean;
    "active?": boolean;
  };
  cursus: {
    id: number;
    created_at: string;
    name: string;
    slug: string;
    kind: string;
  };
};
