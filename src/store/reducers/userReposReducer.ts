import {
  FAIL_FETCH_USER_REPOS,
  START_FETCH_USER_REPOS,
  SUCCESS_FETCH_USER_REPOS,
} from "../../data";
import { IUserRepo, UserReposAction } from "../../types/userReposTypes";

interface IUserReposState {
  items: IUserRepo[] | null;
  loading: boolean;
  error: string | null;
}
const initialState: IUserReposState = {
  items: null,
  loading: false,
  error: null,
};
export const userReposReducer = (
  state = initialState,
  action: UserReposAction
) => {
  switch (action.type) {
    case START_FETCH_USER_REPOS:
    case FAIL_FETCH_USER_REPOS:
    case SUCCESS_FETCH_USER_REPOS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
