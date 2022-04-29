import axios from "axios";
import { Dispatch } from "redux";
import { BASE_URL } from "../../data/constants";
import { IUserProfile } from "../../types/userProfileTypes";
import { IUserRepo } from "../../types/userReposTypes";
import {
  failFetchUserProfileAC,
  startFetchUserProfileAC,
  startFetchUserReposAC,
  succesFetchUserProfileAC,
  successFetchUserReposAC,
} from "./actionCreators";

export const requestUserProfile =
  (login: string) => async (dispatch: Dispatch) => {
    dispatch(startFetchUserProfileAC());
    try {
      await axios
        .get<IUserProfile>(`${BASE_URL}/users/${login}`)
        .then((responce) => {
          dispatch(succesFetchUserProfileAC(responce.data));
          return responce.data.repos_url;
        })
        .then(async (url) => {
          dispatch(startFetchUserReposAC());
          const params = "?per_page=100";
          const responce = await axios.get<IUserRepo[]>(url + params);
          dispatch(successFetchUserReposAC(responce.data));
        });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(failFetchUserProfileAC(error));
      }
    }
  };
