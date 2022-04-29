import {
  FAIL_FETCH_USERS,
  START_FETCH_USERS,
  SUCCESS_FETCH_USERS,
} from "../../data";
import { IUser, UsersAction } from "../../types/usersTypes";

interface UsersInitialState {
  users: IUser[];
  error: null | string;
  loading: boolean;
}

const initialState: UsersInitialState = {
  users: [],
  error: null,
  loading: false,
};

export default function usersReducer(
  state = initialState,
  action: UsersAction
): typeof initialState {
  switch (action.type) {
    case START_FETCH_USERS:
    case SUCCESS_FETCH_USERS:
    case FAIL_FETCH_USERS: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
