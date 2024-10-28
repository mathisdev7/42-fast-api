import { UserImage } from "./UserData";

export type Project = {
  id: number;
  name: string;
  slug: string;
  difficulty?: null;
  parent?: {
    name: string;
    id: number;
    slug: string;
    url?: string;
  };
  children?: any[];
  attachments?: any[];
  created_at: string;
  updated_at: string;
  exam: boolean;
  git_id?: null;
  repository?: null;
  cursus?: {
    id: number;
    created_at: string;
    name: string;
    slug: string;
    kind: string;
  }[];
  campus?: {
    id: number;
    name: string;
    time_zone: string;
    language: {
      id: number;
      name: string;
      identifier: string;
      created_at: string;
      updated_at: string;
    }[];
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
  }[];
  videos?: any[];
  project_sessions?: {
    id: number;
    solo: boolean;
    begin_at?: null;
    end_at?: null;
    estimate_time: string;
    difficulty?: number;
    objectives?: any[];
    description: string;
    duration_days?: null;
    terminating_after?: null;
    project_id: number;
    campus_id?: number;
    cursus_id?: number;
    created_at: string;
    updated_at: string;
    max_people?: null;
    is_subscriptable: boolean;
    scales?: any[];
    uploads?: any[];
    team_behaviour: string;
    commit?: null;
  }[];
};

export type ProjectTeamUser = {
  id: number;
  login: string;
  url: string;
  leader: boolean;
  occurrence: number;
  validated: boolean;
  projects_user_id: number;
};

export type ProjectTeam = {
  id: number;
  name: string;
  url: string;
  final_mark: number;
  project_id: number;
  created_at: string;
  updated_at: string;
  status: string;
  terminating_at: string | null;
  users: ProjectTeamUser[];
  "locked?": boolean;
  "validated?": boolean;
  "closed?": boolean;
  repo_url: string;
  repo_uuid: string;
  locked_at: string;
  closed_at: string;
  project_session_id: number;
  project_gitlab_path: string;
};

export type UserProject = {
  id: number;
  occurrence: number;
  final_mark: number;
  status: string;
  "validated?": boolean;
  current_team_id: number;
  project: {
    id: number;
    name: string;
    slug: string;
    parent_id: number | null;
  };
  cursus_ids: number[];
  marked_at: string;
  marked: boolean;
  retriable_at: string;
  created_at: string;
  updated_at: string;
  user: {
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
    "staff?": boolean;
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
    "alumni?": boolean;
    "active?": boolean;
  };
  teams: ProjectTeam[];
};
