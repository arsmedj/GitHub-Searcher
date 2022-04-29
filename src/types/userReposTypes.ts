import {
  FAIL_FETCH_USER_REPOS,
  START_FETCH_USER_REPOS,
  SUCCESS_FETCH_USER_REPOS,
} from "../data";
import { IUser } from "./usersTypes";

export interface IUserRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: IUser;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: 25;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string | null;
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

interface IStartFetchUserRepos {
  type: typeof START_FETCH_USER_REPOS;
  payload: { loading: boolean; items: null };
}
interface IFailFetchUserRepos {
  type: typeof FAIL_FETCH_USER_REPOS;
  payload: { loading: boolean; error: string };
}
interface ISuccessFetchUserRepos {
  type: typeof SUCCESS_FETCH_USER_REPOS;
  payload: { loading: boolean; items: IUserRepo[] };
}

export type UserReposAction =
  | IStartFetchUserRepos
  | IFailFetchUserRepos
  | ISuccessFetchUserRepos;
