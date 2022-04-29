import { Fragment } from "react";
import { connect } from "react-redux";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";

import UserListItem from "../components/UsersList/UsersListItem";
import { useTypedSelector } from "../hooks/redux";
import { requestUsers } from "../store/actions/users";
import { IUser } from "../types/usersTypes";

interface UsersListContainerProps {
  requestUsers: (query: string) => void;
}

const UsersListContainer: React.FC<UsersListContainerProps> = ({
  requestUsers,
}) => {
  const { users, loading, error } = useTypedSelector((state) => state.users);
  return (
    <Fragment>
      <SearchBar
        searchDelay={600}
        placeholder="Search for Users"
        changeSearch={requestUsers}
      />
      <List
        items={users}
        renderItem={(user: IUser) => <UserListItem key={user.id} user={user} />}
        loading={loading}
        error={error}
      />
    </Fragment>
  );
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, { requestUsers })(UsersListContainer);
