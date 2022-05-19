import {
  START_FETCH_USERS,
  SUCCESS_FETCH_USERS,
  FAIL_FETCH_USERS,
} from "../data";

export interface IUsersInitialState {
  users: IUser[];
}
export interface IUserProfileInitialState {
  users: IUser[];
}

export interface IUser {
  login: number | null;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface IStartFetchUsersAction {
  type: typeof START_FETCH_USERS;
  payload: {
    loading: boolean;
  };
}
export interface ISuccessFetchUsersAction {
  type: typeof SUCCESS_FETCH_USERS;
  payload: {
    users: IUser[];
    loading: boolean;
  };
}
export interface IFailFetchUsersAction {
  type: typeof FAIL_FETCH_USERS;
  payload: {
    error: string;
    loading: boolean;
  };
}

export type UsersAction =
  | IStartFetchUsersAction
  | ISuccessFetchUsersAction
  | IFailFetchUsersAction;
