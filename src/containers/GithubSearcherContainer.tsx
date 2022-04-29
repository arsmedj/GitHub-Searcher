import { Fragment } from "react";
import { Navigate } from "react-router";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import UserProfileContainer from "./UserProfileContainer";

import UsersListContainer from "./UsersListContainer";

const GithubSearcherContainer: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/users" />}></Route>
        <Route path="/users" element={<UsersListContainer />} />
        <Route path="/users/:login" element={<UserProfileContainer />} />
      </Routes>
    </Fragment>
  );
};
export default GithubSearcherContainer;
