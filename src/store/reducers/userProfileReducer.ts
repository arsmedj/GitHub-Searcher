import {
  FAIL_FETCH_USER_PROFILE,
  START_FETCH_USER_PROFILE,
  SUCCESS_FETCH_USER_PROFILE,
} from "../../data";
import { IUserProfile, UserProfileAction } from "../../types/userProfileTypes";

interface UserProfileState {
  profile: IUserProfile | null;
  error: string | null;
  loading: boolean;
}

const initialState: UserProfileState = {
  profile: null,
  error: null,
  loading: false,
};

export function userProfileReducer(
  state = initialState,
  action: UserProfileAction
) {
  switch (action.type) {
    case START_FETCH_USER_PROFILE:
    case SUCCESS_FETCH_USER_PROFILE:
    case FAIL_FETCH_USER_PROFILE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
