export interface UserImage {
  link: string;
  versions: {
    large: string;
    medium: string;
    small: string;
    micro: string;
  };
}

export interface CursusUser {
  grade: string | null;
  level: number;
  skills: { id: number; name: string; level: number }[];
  blackholed_at: string | null;
  id: number;
  begin_at: string;
  end_at: string | null;
  cursus_id: number;
  has_coalition: boolean;
  created_at: string;
  updated_at: string;
  user: object;
  cursus: object;
}

export interface ProjectUser {
  id: number;
  occurrence: number;
  final_mark: number;
  status: string;
  validated: boolean;
  current_team_id: number;
  project: object;
  cursus_ids: number[];
  marked_at: string;
  marked: boolean;
  retriable_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface LanguageUser {
  id: number;
  language_id: number;
  user_id: number;
  position: number;
  created_at: string;
}

export interface Campus {
  id: number;
  name: string;
  time_zone: string;
  language: object;
  users_count: number;
  vogsphere_id: number;
  country: string;
  address: string;
  zip: string;
  city: string;
  website: string;
  facebook: string;
  twitter: string;
  active: boolean;
  public: boolean;
  email_extension: string;
  default_hidden_phone: boolean;
}

export interface CampusUser {
  id: number;
  user_id: number;
  campus_id: number;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
}

export type Achievement = {
  id: number;
  name: string;
  description: string;
  tier: "easy" | "medium" | "none";
  kind: "scolarity" | "social" | "project";
  visible: boolean;
  image: string;
  nbr_of_success: number | null;
  users_url: string;
};

export interface UserData {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  usual_full_name: string;
  usual_first_name: string | null;
  url: string;
  phone: string;
  displayname: string;
  kind: string;
  image: UserImage;
  staff: boolean;
  correction_point: number;
  pool_month: string;
  pool_year: string;
  location: string | null;
  wallet: number;
  anonymize_date: string;
  data_erasure_date: string;
  created_at: string;
  updated_at: string;
  alumnized_at: string | null;
  alumni: boolean;
  active: boolean;
  groups: string[];
  cursus_users: CursusUser[];
  projects_users: ProjectUser[];
  languages_users: LanguageUser[];
  achievements: Achievement[];
  titles: any[];
  titles_users: any[];
  partnerships: any[];
  patroned: any[];
  patroning: any[];
  expertises_users: any[];
  roles: any[];
  campus: Campus[];
  campus_users: CampusUser[];
}
