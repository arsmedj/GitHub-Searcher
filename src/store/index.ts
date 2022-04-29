import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userProfileReducer } from "./reducers/userProfileReducer";
import { userReposReducer } from "./reducers/userReposReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  currentUser: userProfileReducer,
  repos: userReposReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer, middleware: [thunk] });
};
export type RootState = ReturnType<typeof rootReducer>;

export const store = setupStore();
