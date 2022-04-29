import { Link } from "react-router-dom";
import { IUser } from "../../types/usersTypes";

interface IUserListItemProps {
  user: IUser;
}

const UserListItem: React.FC<IUserListItemProps> = ({ user }) => {
  return (
    <Link to={`/users/${user.login}`}>
      <div className="item">
        <div className="user-info">
          <img className="avatar" src={user.avatar_url} alt="ava" />
          <div className="name">{user.login}</div>
        </div>
        <div className="user-repos-count">Repo ###</div>
      </div>
    </Link>
  );
};

export default UserListItem;
