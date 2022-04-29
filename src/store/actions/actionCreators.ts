import { AxiosError } from "axios";
import {
  FAIL_FETCH_USERS,
  FAIL_FETCH_USER_PROFILE,
  FAIL_FETCH_USER_REPOS,
  START_FETCH_USERS,
  START_FETCH_USER_PROFILE,
  START_FETCH_USER_REPOS,
  SUCCESS_FETCH_USERS,
  SUCCESS_FETCH_USER_PROFILE,
  SUCCESS_FETCH_USER_REPOS,
} from "../../data";
import { IUserProfile } from "../../types/userProfileTypes";
import { IUserRepo } from "../../types/userReposTypes";
import { IUser } from "../../types/usersTypes";

//fetch users list action creators
export const startFetchUsersAC = () => ({
  type: START_FETCH_USERS,
  payload: { loading: true },
});
export const successFetchUsersAC = (users: IUser[]) => ({
  type: SUCCESS_FETCH_USERS,
  payload: { users, loading: false },
});
export const failFetchUsersAC = (error: AxiosError) => ({
  type: FAIL_FETCH_USERS,
  payload: { error: error.message, loading: false },
});

//fetch user profile action creators
export const startFetchUserProfileAC = () => ({
  type: START_FETCH_USER_PROFILE,
  payload: { loading: true, profile: null },
});
export const succesFetchUserProfileAC = (profile: IUserProfile) => ({
  type: SUCCESS_FETCH_USER_PROFILE,
  payload: {
    loading: false,
    profile,
  },
});
export const failFetchUserProfileAC = (error: AxiosError) => ({
  type: FAIL_FETCH_USER_PROFILE,
  payload: { error: error.message, loading: false },
});

//fetch user's repositories action creators
export const startFetchUserReposAC = () => ({
  type: START_FETCH_USER_REPOS,
  loading: true,
  items: null,
});
export const failFetchUserReposAC = (error: AxiosError) => ({
  type: FAIL_FETCH_USER_REPOS,
  payload: {
    loading: false,
    error: error.message,
  },
});
export const successFetchUserReposAC = (items: IUserRepo[]) => ({
  type: SUCCESS_FETCH_USER_REPOS,
  payload: {
    loading: false,
    items,
  },
});
