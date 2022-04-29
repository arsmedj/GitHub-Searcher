import axios from "axios";
import { Dispatch } from "redux";
import { BASE_URL } from "../../data/constants";
import { IUser } from "../../types/usersTypes";
import {
  failFetchUsersAC,
  startFetchUsersAC,
  successFetchUsersAC,
} from "./actionCreators";

interface IAxiosResponce {
  items: IUser[];
  total_count: number;
  incomplete_results: boolean;
}

export const requestUsers = (search: string) => async (dispatch: Dispatch) => {
  if (search) {
    dispatch(startFetchUsersAC());
    try {
      const responce = await axios.get<IAxiosResponce>(
        `${BASE_URL}/search/users?q=${search}&per_page=100`
      );
      dispatch(successFetchUsersAC(responce.data.items));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(failFetchUsersAC(error));
      }
    }
  }
};
